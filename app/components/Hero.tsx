"use client";

import { useCallback, useState } from "react";

type Point = readonly [number, number];

const mainNodes = [
  [190, 250],
  [510, 265],
  [360, 270],
  [760, 250],
  [1195, 390],
  [1120, 655],
  [980, 540],
] as const;

const smallNodes = [
  [125, 700],
  [315, 610],
] as const;

const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 900;
const rubberTransition =
  "transition-[cx,cy,d] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]";

const point = ([x, y]: Point) => `${x.toFixed(1)} ${y.toFixed(1)}`;

export function Hero() {
  const [cursor, setCursor] = useState({
    active: false,
    svgX: VIEWBOX_WIDTH / 2,
    svgY: VIEWBOX_HEIGHT / 2,
    x: 0,
    y: 0,
  });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const scale = Math.max(
        rect.width / VIEWBOX_WIDTH,
        rect.height / VIEWBOX_HEIGHT,
      );
      const renderedWidth = VIEWBOX_WIDTH * scale;
      const renderedHeight = VIEWBOX_HEIGHT * scale;
      const offsetX = (rect.width - renderedWidth) / 2;
      const offsetY = (rect.height - renderedHeight) / 2;

      setCursor({
        active: true,
        svgX: (event.clientX - rect.left - offsetX) / scale,
        svgY: (event.clientY - rect.top - offsetY) / scale,
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      });
    },
    [],
  );

  const handlePointerLeave = useCallback(() => {
    setCursor({
      active: false,
      svgX: VIEWBOX_WIDTH / 2,
      svgY: VIEWBOX_HEIGHT / 2,
      x: 0,
      y: 0,
    });
  }, []);

  const attractPoint = (
    [x, y]: Point,
    radius = 320,
    strength = 0.46,
    maxPull = 140,
  ): Point => {
    if (!cursor.active) {
      return [x, y];
    }

    const dx = cursor.svgX - x;
    const dy = cursor.svgY - y;
    const distance = Math.hypot(dx, dy);

    if (distance > radius) {
      return [x, y];
    }

    const falloff = (1 - distance / radius) ** 2;
    const pull = Math.min(distance * strength * falloff, maxPull);
    const unitX = distance === 0 ? 0 : dx / distance;
    const unitY = distance === 0 ? 0 : dy / distance;

    return [x + unitX * pull, y + unitY * pull];
  };

  const mainPath = [
    "M",
    point(attractPoint([190, 250], 380, 0.58, 150)),
    "C",
    point(attractPoint([295, 155], 380, 0.42, 130)),
    point(attractPoint([475, 165], 380, 0.42, 130)),
    point(attractPoint([510, 265], 380, 0.58, 150)),
    "C",
    point(attractPoint([560, 405], 380, 0.48, 140)),
    point(attractPoint([320, 405], 380, 0.48, 140)),
    point(attractPoint([360, 270], 380, 0.58, 150)),
    "C",
    point(attractPoint([405, 125], 380, 0.42, 130)),
    point(attractPoint([640, 170], 380, 0.4, 130)),
    point(attractPoint([760, 250], 380, 0.56, 150)),
    "C",
    point(attractPoint([910, 350], 380, 0.42, 130)),
    point(attractPoint([1080, 285], 380, 0.44, 135)),
    point(attractPoint([1195, 390], 380, 0.58, 150)),
    "C",
    point(attractPoint([1295, 482], 380, 0.44, 135)),
    point(attractPoint([1260, 620], 380, 0.44, 135)),
    point(attractPoint([1120, 655], 380, 0.58, 150)),
    "C",
    point(attractPoint([970, 692], 380, 0.42, 130)),
    point(attractPoint([910, 610], 380, 0.42, 130)),
    point(attractPoint([980, 540], 380, 0.58, 150)),
  ].join(" ");

  const smallPath = [
    "M",
    point(attractPoint([125, 700], 280, 0.62, 120)),
    "C",
    point(attractPoint([180, 605], 280, 0.48, 105)),
    point(attractPoint([250, 570], 280, 0.48, 105)),
    point(attractPoint([315, 610], 280, 0.62, 120)),
  ].join(" ");

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <div className="hero-grid absolute inset-0" />
      <svg
        aria-hidden="true"
        className="absolute inset-0 z-[1] h-full w-full opacity-80"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="hero-network-fade" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="12%" stopColor="white" stopOpacity="1" />
            <stop offset="84%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="hero-network-mask">
            <rect fill="url(#hero-network-fade)" height="900" width="1440" />
          </mask>
        </defs>
        <path
          className={`text-line ${rubberTransition}`}
          d={mainPath}
          mask="url(#hero-network-mask)"
          opacity="0.34"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <g className="text-foreground">
          {mainNodes.map((node) => {
            const [cx, cy] = attractPoint(node, 330, 0.76, 120);

            return (
              <circle
                key={`${node[0]}-${node[1]}`}
                className={rubberTransition}
                cx={cx}
                cy={cy}
                fill="var(--background)"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </g>
        <circle
          className={`text-accent-red ${rubberTransition}`}
          cx={attractPoint([760, 250], 330, 0.8, 126)[0]}
          cy={attractPoint([760, 250], 330, 0.8, 126)[1]}
          fill="currentColor"
          r="4"
        />
        <path
          className={`text-line ${rubberTransition}`}
          d={smallPath}
          opacity="0.34"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        {smallNodes.map((node) => {
          const [cx, cy] = attractPoint(node, 280, 0.82, 112);

          return (
            <circle
              key={`${node[0]}-${node[1]}`}
              className={`text-foreground ${rubberTransition}`}
              cx={cx}
              cy={cy}
              fill="var(--background)"
              r="7"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 text-center sm:px-10">
        <div className="flex max-w-[calc(100vw-48px)] flex-col items-center gap-4">
          <h1 className="text-display-standard font-semibold uppercase text-foreground">
            Ribas
          </h1>
          <p className="text-body-standard text-center font-normal text-foreground">
            Product Engineer based in Kochi
          </p>
        </div>
      </div>
    </section>
  );
}
