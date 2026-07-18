"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const points = [
  { x: 8, y: 24, size: 18, pull: 22, variant: "hollow" },
  { x: 15, y: 17, size: 30, pull: -18, variant: "dot" },
  { x: 22, y: 29, size: 14, pull: 20, variant: "accent" },
  { x: 10, y: 46, size: 24, pull: -24, variant: "dot" },
  { x: 20, y: 57, size: 17, pull: 26, variant: "hollow" },
  { x: 69, y: 61, size: 28, pull: -22, variant: "hollow" },
  { x: 79, y: 74, size: 16, pull: 18, variant: "accent" },
] as const;

export function CursorField() {
  const target = useRef({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();

      target.current = {
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      };
    },
    [],
  );

  const handlePointerLeave = useCallback(() => {
    target.current = { x: 0, y: 0 };
  }, []);

  useEffect(() => {
    let frameId = 0;

    const tick = () => {
      setCursor((current) => ({
        x: current.x + (target.current.x - current.x) * 0.08,
        y: current.y + (target.current.y - current.y) * 0.08,
      }));

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-[1]"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      {points.map((point) => (
        <span
          className={`absolute rounded-full border ${
            point.variant === "accent"
              ? "border-accent-red bg-accent-red"
              : "border-foreground bg-transparent"
          }`}
          key={`${point.x}-${point.y}`}
          style={{
            height: point.size,
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: `translate(${cursor.x * point.pull}px, ${
              cursor.y * point.pull
            }px)`,
            width: point.size,
          }}
        >
          {point.variant === "dot" ? (
            <span className="absolute top-1/2 left-1/2 h-[32%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
          ) : null}
        </span>
      ))}
    </div>
  );
}
