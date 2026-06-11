import { useEffect, useRef } from "react";

// Scroll-scrubbed canvas frame sequence — the "3D scroll" effect.
// A cinematic clip exported to numbered JPGs; the frame drawn to the canvas
// is chosen by scroll progress, so scrolling plays the film forward/backward.
const CinematicScroll = ({
  frameCount = 95,
  framePath = (i) => `/frames/hero/frame_${String(i).padStart(4, "0")}.jpg`,
  lines = [],
  scrollVh = 420,
  background = "#121d34",
}) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const lineRefs = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return undefined;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const ctx = canvas.getContext("2d", { alpha: false });

    const images = [];
    for (let i = 0; i < frameCount; i += 1) {
      const img = new Image();
      img.src = framePath(i + 1);
      images[i] = img;
    }

    const draw = (index) => {
      const img = images[index];
      if (!img?.complete || !img.naturalWidth) return;
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      let dw;
      let dh;
      let dx;
      let dy;
      if (ir > cr) {
        dh = ch;
        dw = ch * ir;
        dx = (cw - dw) / 2;
        dy = 0;
      } else {
        dw = cw;
        dh = cw / ir;
        dx = 0;
        dy = (ch - dh) / 2;
      }
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(frameRef.current);
    };

    let ticking = false;
    const render = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);

      const idx = Math.min(frameCount - 1, Math.floor(p * (frameCount - 1)));
      if (idx !== frameRef.current) {
        frameRef.current = idx;
        draw(idx);
      }

      lineRefs.current.forEach((el, i) => {
        if (!el || !lines[i]) return;
        const { in: a, out: b } = lines[i];
        const mid = (a + b) / 2;
        const half = (b - a) / 2;
        let o = 1 - Math.abs(p - mid) / half;
        o = Math.max(0, Math.min(1, o));
        el.style.opacity = String(o);
        el.style.transform = `translate(-50%, calc(-50% + ${(1 - o) * 28}px))`;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    };

    if (reduceMotion) {
      // static poster + all lines hidden except the first
      images[0].onload = () => draw(0);
      resize();
      lineRefs.current.forEach((el, i) => {
        if (el) el.style.opacity = i === 0 ? "1" : "0";
      });
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }

    images[0].onload = () => draw(0);
    resize();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [frameCount, framePath, lines, background]);

  return (
    <section
      ref={sectionRef}
      className="cinematic-scroll"
      style={{ height: `${scrollVh}vh` }}
      aria-label="Cinematic presentation"
    >
      <div className="cinematic-stage" style={{ background }}>
        <canvas ref={canvasRef} className="cinematic-canvas" />
        <div className="cinematic-vignette" aria-hidden="true" />
        {lines.map((line, i) => (
          <h2
            key={line.text}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className={`cinematic-line ${line.gold ? "cinematic-line-gold" : ""}`}
          >
            {line.text}
          </h2>
        ))}
      </div>
    </section>
  );
};

export default CinematicScroll;
