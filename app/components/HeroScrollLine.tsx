"use client";

import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

const pathLength = 1200;
const scrollLinePoints = [
  [216, 18],
  [184, 118],
  [224, 210],
  [130, 316],
  [206, 444],
  [104, 590],
  [152, 700],
  [60, 814],
  [8, 920],
] as const;

function createSmoothPath(points: readonly (readonly [number, number])[]) {
  return points
    .map((point, index) => {
      if (index === 0) {
        return `M${point[0]} ${point[1]}`;
      }

      const previous = points[index - 1];
      const beforePrevious = points[index - 2] ?? previous;
      const next = points[index + 1] ?? point;
      const tension = 0.17;
      const controlOne = [
        previous[0] + (point[0] - beforePrevious[0]) * tension,
        previous[1] + (point[1] - beforePrevious[1]) * tension,
      ];
      const controlTwo = [
        point[0] - (next[0] - previous[0]) * tension,
        point[1] - (next[1] - previous[1]) * tension,
      ];

      return `C${controlOne[0]} ${controlOne[1]}, ${controlTwo[0]} ${controlTwo[1]}, ${point[0]} ${point[1]}`;
    })
    .join(" ");
}

const scrollLinePath = createSmoothPath(scrollLinePoints);

export function HeroScrollLine() {
  const [introProgress, setIntroProgress] = useState(0);
  const [progress, setProgress] = useState(() =>
    typeof window === "undefined"
      ? 0
      : Math.min(1, Math.max(0, window.scrollY / window.innerHeight)),
  );

  useEffect(() => {
    let frame = 0;
    const delay = 760;
    const duration = 820;
    const startedAt = performance.now() + delay;

    const tick = (time: number) => {
      const rawProgress = Math.min(1, Math.max(0, (time - startedAt) / duration));
      const easedIntro = 1 - (1 - rawProgress) ** 3;

      setIntroProgress(easedIntro);

      if (rawProgress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  useLenis((instance) => {
    setProgress(
      Math.min(1, Math.max(0, instance.scroll / window.innerHeight)),
    );
  });

  const easedProgress = 1 - (1 - progress) ** 2;
  const drawProgress = Math.max(easedProgress, 1 - introProgress);

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute top-[12svh] right-8 z-10 h-[76svh] w-[clamp(130px,20vw,300px)] overflow-visible text-foreground sm:right-12 md:right-20"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 260 940"
    >
      <path
        d={scrollLinePath}
        pathLength={pathLength}
        stroke="currentColor"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength * drawProgress}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={Math.min(introProgress, 1 - easedProgress)}
        strokeWidth="4.5"
      />
    </svg>
  );
}
