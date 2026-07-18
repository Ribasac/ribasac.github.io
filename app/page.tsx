import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Hero />
      <section
        aria-label="Second section"
        className="relative min-h-[100svh] overflow-hidden bg-accent-red"
      >
        <div className="square-point-grid absolute inset-0" />
      </section>
    </main>
  );
}
