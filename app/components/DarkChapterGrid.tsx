"use client";

import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef } from "react";

export function DarkChapterGrid() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const updateGrid = useCallback(() => {
    const sticky = stickyRef.current;
    const grid = gridRef.current;

    if (!sticky || !grid) {
      return;
    }

    const stickyTop = sticky.getBoundingClientRect().top;
    const y = stickyTop > 0 ? stickyTop * -0.92 : 0;

    grid.style.transform = `translate3d(0, ${y}px, 0)`;
  }, []);

  useLenis(updateGrid);

  useEffect(() => {
    updateGrid();
    window.addEventListener("resize", updateGrid);

    return () => window.removeEventListener("resize", updateGrid);
  }, [updateGrid]);

  return (
    <div className="sticky top-0 h-[100svh] overflow-hidden" ref={stickyRef}>
      <div
        className="section-line-grid absolute inset-0 will-change-transform"
        ref={gridRef}
      />
    </div>
  );
}
