"use client";

import Image from "next/image";
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
      className="relative z-0 -mt-[var(--hero-step-depth)] min-h-[calc(100svh+var(--hero-step-depth))] overflow-hidden bg-accent-red pt-[var(--hero-step-depth)]"
      ref={sectionRef}
    >
      <div
        className="absolute top-0 right-0 left-0 h-[100svh] will-change-transform"
        ref={parallaxRef}
      >
        <div className="section-line-grid absolute inset-0" />
        <div className="absolute inset-0 flex items-end justify-center px-6 sm:px-10">
          <Image
            alt="Portfolio preview"
            className="h-auto w-[min(76vw,980px)] rounded-small object-contain"
            height={900}
            priority={false}
            src="/portfolio.png"
            width={1400}
          />
        </div>
      </div>
    </section>
  );
}
