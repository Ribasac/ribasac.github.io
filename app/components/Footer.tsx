import { GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="relative flex min-h-[100svh] bg-background px-6 pt-8 pb-24 text-foreground sm:px-10 sm:pb-28 md:px-14 lg:pb-32"
      data-menu-theme="light"
      id="contact"
    >
      <div className="relative z-10 mx-auto mt-auto grid w-full max-w-7xl gap-16 md:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.55fr)] md:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-foreground/55 sm:text-xs">
            Next
          </p>
          <h2 className="mt-5 max-w-5xl text-[clamp(48px,10vw,152px)] font-normal leading-[0.9] text-foreground">
            Let&apos;s build something useful.
          </h2>
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-foreground/55 sm:text-xs">
              Github
            </p>
            <a
              className="text-body-standard flex w-fit items-center gap-2 font-normal text-foreground transition-colors hover:text-foreground/62"
              href="https://github.com/"
              rel="noreferrer"
              target="_blank"
            >
              <GitBranch
                aria-hidden="true"
                className="h-[0.9em] w-[0.9em]"
                strokeWidth={1.6}
              />
              Github
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-foreground/55 sm:text-xs">
              Linkedin
            </p>
            <a
              className="text-body-standard w-fit font-normal text-foreground transition-colors hover:text-foreground/62"
              href="https://www.linkedin.com/in/ribaschukkan/"
              rel="noreferrer"
              target="_blank"
            >
              linkedin.com/in/ribaschukkan
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-foreground/55 sm:text-xs">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                className="text-body-standard w-fit font-normal text-foreground transition-colors hover:text-foreground/62"
                href="mailto:ribasksd@gmail.com"
              >
                ribasksd@gmail.com
              </a>
              <a
                className="text-body-standard w-fit font-normal text-foreground transition-colors hover:text-foreground/62"
                href="tel:+918848219624"
              >
                8848219624
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
