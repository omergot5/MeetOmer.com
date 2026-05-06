import { HardHat, Cherry, Workflow, type LucideIcon } from "lucide-react";
import { cv, type CompanyLogoId } from "@/lib/cv";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

const iconForCompany: Readonly<Record<CompanyLogoId, LucideIcon>> = {
  idf: Cherry,
  scalify: Workflow,
  makeover: HardHat,
};

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative px-4 py-20"
    >
      <SectionHeader title="Experience" />

      <h2 id="experience-heading" className="sr-only">
        Experience
      </h2>

      <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" role="list">
        {cv.experience.map((item, idx) => {
          const Icon = iconForCompany[item.logoId] ?? Workflow;
          return (
          <li key={item.id} className="contents">
            <GlassCard
              interactive
              className="flex h-full flex-col p-6"
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-white/60 bg-white/50 text-ink shadow-glass"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-mute">
                    {item.period}
                  </p>
                  <h3 className="text-lg font-semibold leading-tight text-ink">
                    {item.company}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-ink-soft">
                    {item.role}
                  </p>
                </div>
              </div>

              <ul
                className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft"
                role="list"
              >
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-ink/60"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </li>
          );
        })}
      </ol>
    </section>
  );
}
