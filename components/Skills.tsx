"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Github,
  Triangle,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { type ComponentType, type SVGProps } from "react";
import { cv } from "@/lib/cv";
import SectionHeader from "./SectionHeader";
import { ClaudeCodeIcon, GhlIcon, PythonIcon } from "./icons/SkillIcons";

type IconComponent =
  | LucideIcon
  | ComponentType<SVGProps<SVGSVGElement>>;

const iconForSkill: Readonly<Record<string, IconComponent>> = {
  python: PythonIcon,
  github: Github,
  data: BarChart3,
  sql: Database,
  crm: Users,
  "claude-code": ClaudeCodeIcon,
  supabase: Database,
  vercel: Triangle,
  ghl: GhlIcon,
  automation: Workflow,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative px-4 py-20"
    >
      <SectionHeader title="Skills" />

      <h2 id="skills-heading" className="sr-only">
        Skills
      </h2>

      <div className="rounded-3xl border border-white/40 bg-white/30 p-4 shadow-glass backdrop-blur-md backdrop-saturate-150 sm:p-6">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04 } },
          }}
          className="flex flex-wrap justify-center gap-3"
          role="list"
        >
          {cv.skills.map((s) => {
            const Icon = iconForSkill[s.id] ?? Workflow;
            return (
              <motion.li
                key={s.id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.5625rem)]"
              >
                <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/50 bg-white/40 p-5 text-center shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-white/60">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/60 bg-white/60 text-ink shadow-glass"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    {s.label}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
