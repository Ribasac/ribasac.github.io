"use client";

import { ReactLenis } from "lenis/react";
import { useLayoutEffect, type ReactNode } from "react";

function resetScrollPosition() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    resetScrollPosition();
  }, []);

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
