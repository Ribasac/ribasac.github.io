const projects = [
  {
    index: "01",
    title: "SaaS Product Platform",
    role: "Product engineering",
    year: "2026",
  },
  {
    index: "02",
    title: "Cloud Operations System",
    role: "Interface engineering",
    year: "2026",
  },
  {
    index: "03",
    title: "Hospitality Web Experience",
    role: "Frontend engineering",
    year: "2025",
  },
  {
    index: "04",
    title: "Personal Portfolio",
    role: "Design system / Motion",
    year: "2026",
  },
];

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-title"
      className="relative -mt-[12svh] overflow-hidden px-6 pt-0 pb-24 text-background sm:px-10 sm:pb-28 md:px-14 lg:pb-32"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14">
        <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:items-end">
          <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-background/60 sm:text-xs">
            Selected Work
          </p>
          <h2
            className="text-heading-standard max-w-4xl font-normal text-background"
            id="projects-title"
          >
            Projects shaped for real product use.
          </h2>
        </div>

        <div className="border-t border-background/18">
          {projects.map((project) => (
            <article
              className="group grid gap-5 border-b border-background/18 py-7 transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-background/42 sm:py-8 md:grid-cols-[72px_minmax(0,1fr)_minmax(180px,0.45fr)_72px] md:items-center"
              key={project.index}
            >
              <span className="text-sm leading-none text-background/45 md:text-base">
                {project.index}
              </span>
              <h3 className="text-[clamp(30px,5.8vw,82px)] font-normal leading-[0.94] text-background">
                {project.title}
              </h3>
              <p className="text-body-standard font-normal text-background/70 md:text-right">
                {project.role}
              </p>
              <span className="text-sm leading-none text-background/45 md:text-right md:text-base">
                {project.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
