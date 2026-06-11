import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered section reveal. The section root fades/slides in, and any
// descendants marked with [data-reveal-child] stagger in right after it.
export const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mediaQuery?.matches) {
      node.dataset.revealed = "true";
      gsap.set(node, { clearProps: "all", opacity: 1 });
      return undefined;
    }

    const children = node.querySelectorAll("[data-reveal-child]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 84%", once: true },
          onComplete: () => {
            node.dataset.revealed = "true";
          },
        },
      );

      if (children.length) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 28, scale: 0.985 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.09,
            ease: "power3.out",
            delay: 0.12,
            scrollTrigger: { trigger: node, start: "top 84%", once: true },
          },
        );
      }
    }, node);

    return () => ctx.revert();
  }, []);

  return ref;
};
