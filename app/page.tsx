import { DarkChapter } from "./components/DarkChapter";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-foreground text-foreground">
      <Hero />
      <DarkChapter />
      <Footer />
    </main>
  );
}
