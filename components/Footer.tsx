import { cv } from "@/lib/cv";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer
      className="relative mt-16 px-4 pb-10 pt-6"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 border-t border-white/40 pt-6 text-xs text-ink-mute sm:flex-row sm:items-center">
        <p>
          &copy; {year} {cv.name}. All rights reserved.
        </p>
        <p className="text-ink-mute">
          Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
