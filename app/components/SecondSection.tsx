"use client";

import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef } from "react";

export function SecondSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const updateParallax = useCallback((scroll: number) => {
    const section = sectionRef.current;
    const parallaxLayer = parallaxRef.current;

    if (!section || !parallaxLayer) {
      return;
    }

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const settledTop = window.innerHeight - sectionHeight;
    const rectTop = sectionTop - scroll;
    const progressFromSettled = rectTop - settledTop;
    const y = -rectTop + progressFromSettled * 0.08;

    parallaxLayer.style.transform = `translate3d(0, ${y}px, 0)`;
  }, []);

  const lenis = useLenis((instance) => {
    updateParallax(instance.scroll);
  });

  useEffect(() => {
    updateParallax(lenis?.scroll ?? window.scrollY);
  }, [lenis, updateParallax]);

  return (
    <section
      aria-label="Second section"
      className="relative z-0 min-h-[100svh] overflow-hidden bg-foreground"
      data-menu-theme="dark"
      ref={sectionRef}
    >
      <div
        className="absolute top-0 right-0 left-0 h-[100svh] will-change-transform"
        ref={parallaxRef}
      >
        <div className="section-line-grid absolute inset-0" />
      </div>
      <div className="relative z-10 flex min-h-[100svh] items-center px-6 py-20 text-background sm:px-10 md:px-14">
        <h2 className="text-heading-standard mx-auto max-w-4xl text-center font-normal text-background">
          I engineer products that feel simple to use.
        </h2>
      </div>
    </section>
  );
}
