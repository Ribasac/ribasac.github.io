import { DarkChapterGrid } from "./DarkChapterGrid";
import { ProjectsSection } from "./ProjectsSection";
import { SecondSection } from "./SecondSection";

export function DarkChapter() {
  return (
    <section
      aria-label="Work introduction and projects"
      className="relative z-0 bg-foreground text-background"
      data-menu-theme="dark"
    >
      <DarkChapterGrid />
      <div className="relative z-10 -mt-[100svh]">
        <SecondSection />
        <ProjectsSection />
      </div>
    </section>
  );
}
