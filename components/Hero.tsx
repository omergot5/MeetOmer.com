"use client";

import { motion } from "framer-motion";
import { GraduationCap, Github, Linkedin, Mail, Phone } from "lucide-react";
import { cv } from "@/lib/cv";
import ProfileImage from "./ProfileImage";

export default function Hero() {
  const parts = cv.name.toUpperCase().split(" ");
  const first: string = parts[0] ?? cv.name.toUpperCase();
  const last: string = parts.slice(1).join(" ") || "";

  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="relative px-4 pb-12 pt-28 sm:pt-32 lg:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl border border-white/40 bg-white/30 p-6 shadow-glass backdrop-blur-md backdrop-saturate-150 sm:p-10 lg:p-14"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-12">
          {/* Column 1 — name, bio, contact */}
          <div>
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="font-extrabold tracking-tight leading-[0.95] text-[clamp(2.25rem,7vw,5.5rem)]"
            >
              <span className="block text-ink">{first}</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                {last}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {cv.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8 text-sm font-bold tracking-wide text-ink-soft"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/60 bg-white/50 text-ink shadow-glass"
                >
                  <Phone className="h-4 w-4" />
                </span>
                <span>{cv.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/60 bg-white/50 text-ink shadow-glass"
                >
                  <Mail className="h-4 w-4" />
                </span>
                <span>{cv.contact.email}</span>
              </div>
            </motion.div>
          </div>

          {/* Column 2 — profile photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
          >
            <ProfileImage alt={`Portrait of ${cv.name}`} />
          </motion.div>
        </div>
      </motion.div>

      {/* Education — separate card below Hero, still within ABOUT */}
      <motion.div
        id="education"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
        className="mt-10 scroll-mt-24"
      >
        <h2 className="mb-6 text-center text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Education
        </h2>

        <div
          aria-labelledby="edu-heading"
          className="mx-auto max-w-3xl rounded-2xl border border-white/40 bg-white/30 p-6 shadow-glass backdrop-blur-md backdrop-saturate-150 sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span
              aria-hidden="true"
              className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-white/60 bg-white/50 text-ink shadow-glass"
            >
              <GraduationCap className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-ink-mute">
                {cv.education.period}
              </p>
              <h3
                id="edu-heading"
                className="text-lg font-semibold text-ink"
              >
                {cv.education.institution}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                {cv.education.program}
              </p>
              <p className="mt-1 whitespace-pre-line text-sm font-medium text-ink-soft">
                {cv.education.note}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

