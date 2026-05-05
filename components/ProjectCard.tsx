"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { type Project } from "@/lib/cv";

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const titleId = `project-${project.id}-title`;
  const descId = `project-${project.id}-desc`;
  const isLink: boolean =
    typeof project.url === "string" && project.url.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="group relative isolate aspect-[4/3] overflow-hidden rounded-2xl border border-white/40 shadow-glass focus-within:ring-2 focus-within:ring-indigo-500"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {/* Visual background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{ backgroundImage: project.cover }}
      />

      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Bottom gradient scrim for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
      />

      {/* "Live demo" pill — always visible top-left */}
      {isLink ? (
        <div className="pointer-events-none absolute left-4 top-4 z-10 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-ink shadow-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
            Live Demo
          </span>
        </div>
      ) : null}

      {/* Always-visible title strip — bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-5 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
        <div className="min-w-0">
          <h3
            id={titleId}
            className="text-xl font-extrabold leading-tight text-white drop-shadow-md sm:text-2xl"
          >
            {project.title}
          </h3>
          {project.subtitle ? (
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/85">
              {project.subtitle}
            </p>
          ) : null}
        </div>
        <span
          aria-hidden="true"
          className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-white/95 text-ink shadow-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* Hover/focus overlay */}
      <div
        id={descId}
        className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end gap-4 bg-ink/85 p-6 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
      >
        <div>
          <h4 className="text-xl font-extrabold sm:text-2xl">{project.title}</h4>
          {project.subtitle ? (
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {project.subtitle}
            </p>
          ) : null}
        </div>
        <ul
          className="space-y-2 text-sm leading-relaxed text-white/85"
          role="list"
        >
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/80"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2" role="list">
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white/95 backdrop-blur-md">
                {tag}
              </span>
            </li>
          ))}
        </ul>
        {isLink ? (
          <span className="pointer-events-none inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Open Live Site
          </span>
        ) : null}
      </div>

      {/* Stretched link covering the entire card */}
      {isLink ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — open live site (new tab)`}
          className="absolute inset-0 z-30 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        />
      ) : (
        <button
          type="button"
          aria-label={`${project.title} — show details`}
          aria-describedby={descId}
          className="absolute inset-0 z-30 cursor-default rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        />
      )}
    </motion.article>
  );
}
