import { CursorField } from "./CursorField";
import { HeroSteps } from "./HeroSteps";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative z-10 min-h-[calc(100svh+var(--hero-step-depth))] w-full overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[100svh] bg-background" />
      <div className="hero-grid absolute inset-x-0 top-0 h-[100svh]" />
      <HeroSteps />
      <div className="absolute inset-x-0 top-0 h-[100svh]">
        <CursorField />
      </div>
      <div className="pointer-events-none relative z-10 flex min-h-[100svh] items-center justify-center px-6 text-center sm:px-10">
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
