"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  readonly title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-10 text-center text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl"
    >
      {title}
    </motion.h2>
  );
}
