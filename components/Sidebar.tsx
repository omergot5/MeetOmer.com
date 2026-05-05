"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
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

export default function Sidebar() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );
        const top = visible[0];
        if (top && top.target.id) setActive(top.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Primary navigation"
      className="fixed left-6 top-6 bottom-6 z-40 hidden w-64 flex-col rounded-3xl border border-white/40 bg-white/30 p-6 shadow-glass backdrop-blur-md backdrop-saturate-150 lg:flex"
    >
      <a href="#top" aria-label="Go to top" className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/60 bg-white/50 text-sm font-bold text-ink shadow-glass"
        >
          OG
        </span>
        <span className="text-sm font-semibold tracking-wide text-ink">
          {cv.name}
        </span>
      </a>

      <nav aria-label="Sections" className="mt-10 flex-1">
        <ul className="space-y-1" role="list">
          {navItems.map((item) => {
            const isActive = active === item.id;
            const linkClasses = [
              "group relative flex items-center rounded-xl pl-5 pr-3 py-2.5 text-sm font-bold tracking-[0.18em] transition-all duration-300",
              isActive
                ? "bg-white/60 text-ink shadow-glass"
                : "text-ink-mute hover:bg-white/40 hover:text-ink",
            ].join(" ");
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-label={`Jump to ${item.label} section`}
                  aria-current={isActive ? "true" : undefined}
                  className={linkClasses}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute left-1.5 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
                      isActive
                        ? "h-5 w-1 bg-gradient-to-b from-indigo-500 to-cyan-500"
                        : "h-1 w-1 bg-ink-mute/60 group-hover:h-3 group-hover:bg-ink/60",
                    ].join(" ")}
                  />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="flex items-center gap-2 border-t border-white/40 pt-4" role="list">
        <li>
          <a
            href={`tel:${cv.contact.phone.replace(/[^0-9+]/g, "")}`}
            aria-label="Call"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/60 bg-white/40 text-ink shadow-glass transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${cv.contact.email}`}
            aria-label="Send email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/60 bg-white/40 text-ink shadow-glass transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={cv.contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/60 bg-white/40 text-ink shadow-glass transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={cv.contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in new tab)"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/60 bg-white/40 text-ink shadow-glass transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
