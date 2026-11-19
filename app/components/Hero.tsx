import { HeroScrollLine } from "./HeroScrollLine";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative z-10 min-h-[100svh] w-full overflow-hidden bg-background"
      data-menu-theme="light"
    >
      <div className="absolute inset-x-0 top-0 h-[100svh] bg-background" />
      <div className="hero-grid absolute inset-x-0 top-0 h-[100svh]" />
      <HeroScrollLine />
      <div className="pointer-events-none relative z-10 flex min-h-[100svh] items-center justify-center px-6 text-center sm:px-10">
        <div className="flex max-w-[calc(100vw-48px)] flex-col items-center gap-4">
          <h1 className="hero-name-enter text-display-standard font-semibold uppercase text-foreground">
            Ribas
          </h1>
          <p className="hero-description-enter text-body-standard text-center font-normal text-foreground">
            Product Engineer based in Kochi
          </p>
        </div>
      </div>
      <svg
        aria-hidden="true"
        className="hero-signature pointer-events-none absolute bottom-[9svh] left-1/2 z-10 h-auto w-[clamp(140px,46vw,210px)] origin-center -translate-x-1/2 text-foreground/75 sm:top-1/2 sm:bottom-auto sm:left-14 sm:w-[clamp(158px,21vw,280px)] sm:-translate-x-0 sm:-translate-y-1/2 sm:-rotate-90 sm:text-foreground md:left-20"
        fill="none"
        viewBox="0 0 620 190"
      >
        <path
          className="hero-signature-stroke hero-signature-stroke-main"
          d="M105 35 C50 25, 17 70, 32 116 C47 164, 110 158, 151 116 C190 76, 190 47, 165 54 C141 62, 127 121, 137 139 C147 157, 179 125, 198 99 C213 78, 222 74, 219 100 C216 126, 214 145, 229 144 C244 143, 263 105, 278 89 C292 74, 303 75, 295 105 C287 137, 285 151, 304 145 C322 139, 340 105, 354 78 C363 60, 371 51, 368 76 C365 104, 356 139, 376 145 C397 151, 424 103, 442 79 C456 61, 465 57, 459 84 C453 113, 441 142, 462 145 C482 148, 500 111, 516 101 C533 90, 543 101, 535 124 C530 140, 535 151, 553 143 C568 137, 577 124, 588 117"
          pathLength="1000"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="9"
        />
        <path
          className="hero-signature-stroke hero-signature-stroke-accent-one"
          d="M258 88 C276 98, 291 106, 310 113"
          pathLength="1000"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="7"
        />
        <path
          className="hero-signature-stroke hero-signature-stroke-accent-two"
          d="M424 86 C442 98, 457 106, 476 114"
          pathLength="1000"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="7"
        />
      </svg>
    </section>
  );
}
