import { Hero } from "./components/Hero";
import { SecondSection } from "./components/SecondSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-foreground text-foreground">
      <Hero />
      <SecondSection />
    </main>
  );
}
