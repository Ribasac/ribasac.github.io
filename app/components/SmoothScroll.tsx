"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      options={{
        autoRaf: true,
        duration: 1.15,
        easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
        smoothWheel: true,
        syncTouch: false,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
