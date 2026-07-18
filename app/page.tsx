import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Hero />
    </main>
  );
}
