const projects = [
  {
    index: "01",
    title: "Aera Calm",
    role: "Product engineering",
    description:
      "A cross-platform app for sleep, focus, and relaxation, with soundscapes, stories, offline downloads, and personalized experiences.",
    stack: "React Native / Expo · Firebase · Cloudflare R2",
    year: "2026",
  },
  {
    index: "02",
    title: "Ecommerce Platform",
    role: "Full-stack architecture",
    description:
      "A white-label commerce system built for independent client deployments, with configurable storefronts, product variants, inventory, and promotions.",
    stack: "React · Hono · PostgreSQL · Cloudflare Workers",
    year: "2026",
  },
  {
    index: "03",
    title: "Fidztro Jersey Editor",
    role: "Full-stack engineering",
    description:
      "A custom jersey design platform with an interactive editor, product configuration, and supporting APIs and administration tools.",
    stack: "TypeScript · React · PostgreSQL",
    year: "2026",
  },
  {
    index: "04",
    title: "CurveFlow SE",
    role: "Systems engineering",
    description:
      "A workspace and project management system with structured work items, team roles, and permission-aware workflows.",
    stack: "TypeScript · PostgreSQL · RBAC",
    year: "2026",
  },
  {
    index: "05",
    title: "Traffic Surveillance",
    role: "Computer vision",
    description:
      "An applied computer vision project exploring automated traffic monitoring and video analysis.",
    stack: "Python · Computer vision",
    year: "Research",
  },
];

export function ProjectsSection() {
  return (
    <section
      aria-label="Selected work"
      className="relative overflow-hidden px-6 pt-2 pb-24 text-background sm:px-10 sm:pb-28 md:-mt-[12svh] md:px-14 md:pt-0 lg:pb-32"
      id="work"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14">
        <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:items-end">
          <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-background/60 sm:text-xs">
            Selected Work
          </p>
        </div>

        <div className="flex flex-col divide-y divide-background/15 border-t border-background/15">
          {projects.map((project) => (
            <article
              className="group grid min-w-0 gap-5 py-9 sm:py-10 md:grid-cols-[72px_minmax(0,1fr)_minmax(180px,0.45fr)_72px] md:items-start"
              key={project.index}
            >
              <span className="pt-1 text-sm leading-none text-background/45 md:text-base">
                {project.index}
              </span>
              <div className="min-w-0">
                <h3 className="text-[clamp(30px,5.8vw,82px)] font-normal leading-[0.94] break-words text-background">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
                  {project.description}
                </p>
                <p className="mt-4 text-xs leading-relaxed tracking-wide text-background/50 sm:text-sm">
                  {project.stack}
                </p>
              </div>
              <p className="text-body-standard min-w-0 font-normal break-words text-background/70 md:text-right">
                {project.role}
              </p>
              <span className="text-sm leading-none text-background/45 md:pt-1 md:text-right md:text-base">
                {project.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
