import { GraduationCap } from "lucide-react";
import { cv } from "@/lib/cv";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const { education } = cv;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative px-4 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Education" />

        <h2 id="education-heading" className="sr-only">
          Education
        </h2>

        <GlassCard interactive className="mx-auto max-w-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-white/60 bg-white/50 text-ink shadow-glass"
            >
              <GraduationCap className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-ink-mute">
                {education.period}
              </p>
              <h3 className="text-lg font-semibold text-ink">
                {education.institution}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{education.program}</p>
              <p className="mt-1 text-sm font-medium text-ink-soft">
                {education.note}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
