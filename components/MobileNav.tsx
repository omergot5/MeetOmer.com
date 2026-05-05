"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cv } from "@/lib/cv";

interface NavItem {
  readonly id: string;
  readonly label: string;
}

const navItems: readonly NavItem[] = [
  { id: "about", label: "ABOUT" },
  { id: "education", label: "EDUCATION" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
];

export default function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4 lg:hidden"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-white/40 bg-white/30 px-4 py-3 shadow-glass backdrop-blur-md backdrop-saturate-150">
        <a href="#top" aria-label="Go to top" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-xl border border-white/60 bg-white/50 text-sm font-bold text-ink shadow-glass"
          >
            OG
          </span>
          <span className="text-sm font-semibold text-ink">{cv.name}</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/60 bg-white/50 text-ink shadow-glass transition-all duration-200 hover:bg-white/70"
        >
          {open ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="mx-auto mt-2 max-w-3xl rounded-2xl border border-white/40 bg-white/40 p-3 shadow-glass backdrop-blur-md backdrop-saturate-150"
        >
          <ul className="space-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold tracking-[0.18em] text-ink-soft transition-colors hover:bg-white/60 hover:text-ink"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-ink-mute">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
