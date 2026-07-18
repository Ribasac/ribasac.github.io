"use client";

import { useState } from "react";

const menuItems = ["Work", "About", "Contact"];

export function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Main menu">
      <button
        aria-expanded={isOpen}
        className="menu-card group flex h-10 cursor-pointer items-center gap-3 overflow-hidden rounded-small bg-foreground px-4 text-background transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 sm:h-11 sm:px-5"
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
            className={`block h-px w-full bg-background transition-[transform,width] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "translate-y-[2.5px] rotate-45" : "group-hover:w-3"
            }`}
          />
          <span
            className={`block h-px w-full bg-background transition-[transform,width] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "-translate-y-[2.5px] -rotate-45" : "group-hover:w-4"
            }`}
          />
        </span>
      </button>
      <div
        className={`menu-card mt-2 grid overflow-hidden rounded-small bg-foreground text-background transition-[grid-template-rows,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
