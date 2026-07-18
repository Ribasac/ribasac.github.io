"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const menuItems = ["Work", "About", "Contact"];
type MenuTheme = "light" | "dark";

export function HeaderMenu() {
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

  return (
    <nav
      aria-label="Main menu"
      className="flex w-max flex-col items-stretch"
      ref={navRef}
      style={menuStyle}
    >
      <button
        aria-expanded={isOpen}
        className={`menu-card group flex h-10 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-small px-4 transition-[transform,color,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 sm:h-11 sm:px-5 ${menuColorClass}`}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] sm:text-xs">
          Menu
        </span>
        <span
          aria-hidden="true"
          className="flex h-4 w-4 flex-col justify-center gap-1"
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
              <button
                className="cursor-pointer px-4 py-2 text-left text-sm font-normal leading-none transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent sm:px-5"
                key={item}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
