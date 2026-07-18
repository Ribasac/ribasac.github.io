"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const menuItems = [
  { label: "Work", targetId: "work" },
  { label: "About", targetId: "about" },
  { label: "Contact", targetId: "contact" },
];
type MenuTheme = "light" | "dark";

function getNavigationOffset(targetId: string) {
  if (targetId !== "work") {
    return 0;
  }

  return -Math.min(120, Math.max(72, window.innerHeight * 0.1));
}

export function HeaderMenu() {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<MenuTheme>("light");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      const nav = navRef.current;
      const centerY = nav
        ? nav.getBoundingClientRect().top + nav.getBoundingClientRect().height / 2
        : 32;
      const themedSections = document.querySelectorAll<HTMLElement>(
        "[data-menu-theme]",
      );
      const activeSection = Array.from(themedSections).find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= centerY && rect.bottom >= centerY;
      });
      const nextTheme = activeSection?.dataset.menuTheme;

      if (nextTheme === "dark" || nextTheme === "light") {
        setTheme(nextTheme);
      }
    };

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  const menuStyle = {
    "--menu-bg": theme === "dark" ? "var(--background)" : "var(--foreground)",
    "--menu-grid-color":
      theme === "dark" ? "rgb(36 36 36 / 0.1)" : "rgb(247 241 237 / 0.12)",
  } as CSSProperties;
  const menuColorClass =
    theme === "dark" ? "text-foreground" : "text-background";
  const handleNavigate = (targetId: string) => {
    const target = document.getElementById(targetId);

    setIsOpen(false);

    if (!target) {
      return;
    }

    window.history.pushState(null, "", `#${targetId}`);
    const offset = getNavigationOffset(targetId);

    if (lenis) {
      lenis.scrollTo(target, { offset });
      return;
    }

    window.scrollTo({
      behavior: "smooth",
      top: target.getBoundingClientRect().top + window.scrollY + offset,
    });
  };

  return (
    <nav
      aria-label="Main menu"
      className="flex w-max flex-col items-stretch"
      ref={navRef}
      style={menuStyle}
    >
      <button
        aria-expanded={isOpen}
        className={`menu-card group flex h-[var(--menu-height)] min-w-[128px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-small px-[var(--menu-x-padding)] transition-[transform,color,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 sm:min-w-0 ${menuColorClass}`}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="text-[var(--menu-label)] font-semibold uppercase leading-none tracking-[0.08em]">
          Menu
        </span>
        <span
          aria-hidden="true"
          className="flex h-[18px] w-[18px] flex-col justify-center gap-1 sm:h-4 sm:w-4"
        >
          <span
            className={`block h-px w-full bg-current transition-[transform,width] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "translate-y-[2.5px] rotate-45" : "group-hover:w-3"
            }`}
          />
          <span
            className={`block h-px w-full bg-current transition-[transform,width] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "-translate-y-[2.5px] -rotate-45" : "group-hover:w-4"
            }`}
          />
        </span>
      </button>
      <div
        className={`menu-card mt-2 grid overflow-hidden rounded-small transition-[grid-template-rows,transform,color,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuColorClass} ${
          isOpen
            ? "grid-rows-[1fr] translate-y-0"
            : "grid-rows-[0fr] -translate-y-1"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col py-2">
            {menuItems.map((item) => (
              <a
                className="cursor-pointer px-[var(--menu-x-padding)] py-2.5 text-left text-sm font-normal leading-none transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent sm:py-2"
                href={`#${item.targetId}`}
                key={item.targetId}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(item.targetId);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
