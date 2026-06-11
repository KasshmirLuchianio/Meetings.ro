import { useEffect, useRef } from "react";

const GOLD = { r: 184, g: 150, b: 46 };
const NAVY = { r: 27, g: 42, b: 74 };

// Animated particle constellation behind the hero. Pure canvas — no WebGL
// dependency, so the bundle stays small and mobile GPUs stay cool.
const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return undefined;

    const ctx = canvas.getContext("2d");
    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.min(Math.round((width * height) / 16000), 90);
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.8,
        gold: Math.random() > 0.45,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const step = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      const linkDist = Math.min(width, height) * 0.16;

      for (const p of particles) {
        // gentle drift + breathing
        p.x += p.vx;
        p.y += p.vy + Math.sin(t * 0.0006 + p.phase) * 0.08;

        // pointer repulsion
        const dxp = p.x - pointer.x;
        const dyp = p.y - pointer.y;
        const distP = Math.hypot(dxp, dyp);
        if (distP < 110 && distP > 0.01) {
          const force = (110 - distP) / 110;
          p.x += (dxp / distP) * force * 1.6;
          p.y += (dyp / distP) * force * 1.6;
        }

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      // connection lines
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.14;
            const c = a.gold && b.gold ? GOLD : NAVY;
            ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        const c = p.gold ? GOLD : NAVY;
        const pulse = 0.55 + Math.sin(t * 0.001 + p.phase) * 0.25;
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${p.gold ? pulse * 0.8 : pulse * 0.45})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };

    resize();
    raf = requestAnimationFrame(step);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
};

export default HeroCanvas;
