"use client";

import { useLenis } from "lenis/react";
import { useState } from "react";

const stepSpeeds = {
  center: 0.16,
  edge: 0.24,
  mid: 0.2,
} as const;

export function HeroSteps() {
  const [scrollY, setScrollY] = useState(() =>
    typeof window === "undefined" ? 0 : Math.max(0, window.scrollY),
  );

  useLenis((instance) => {
    setScrollY(Math.max(0, instance.scroll));
  });

  const centerTransform = `translate3d(0, ${-scrollY * stepSpeeds.center}px, 0)`;
  const midTransform = `translate3d(0, ${-scrollY * stepSpeeds.mid}px, 0)`;
  const edgeTransform = `translate3d(0, ${-scrollY * stepSpeeds.edge}px, 0)`;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div
        className="absolute top-[100svh] left-0 h-[var(--hero-step-depth)] w-[calc(16%+1px)] bg-background will-change-transform"
        style={{ transform: edgeTransform }}
      />
      <div
        className="absolute top-[100svh] left-[calc(16%-1px)] h-[var(--hero-step-mid)] w-[calc(16%+2px)] bg-background will-change-transform"
        style={{ transform: midTransform }}
      />
      <div
        className="absolute top-[100svh] left-[calc(32%-1px)] h-[var(--hero-step-center)] w-[calc(36%+2px)] bg-background will-change-transform"
        style={{ transform: centerTransform }}
      />
      <div
        className="absolute top-[100svh] right-[calc(16%-1px)] h-[var(--hero-step-mid)] w-[calc(16%+2px)] bg-background will-change-transform"
        style={{ transform: midTransform }}
      />
      <div
        className="absolute top-[100svh] right-0 h-[var(--hero-step-depth)] w-[calc(16%+1px)] bg-background will-change-transform"
        style={{ transform: edgeTransform }}
      />
    </div>
  );
}
