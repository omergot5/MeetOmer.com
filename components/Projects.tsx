import { cv } from "@/lib/cv";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const single: boolean = cv.projects.length === 1;

  // Single project → center a constrained card. Multiple → 2-column grid.
  const wrapperClasses: string = single
    ? "mx-auto max-w-xl"
    : "grid gap-5 sm:grid-cols-2";

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative px-4 py-20"
    >
      <SectionHeader title="Projects" />

      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>

      <ul className={wrapperClasses} role="list">
        {cv.projects.map((p, idx) => (
          <li key={p.id} className="contents">
            <ProjectCard project={p} index={idx} />
          </li>
        ))}
      </ul>
    </section>
  );
}
