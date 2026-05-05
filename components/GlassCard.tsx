"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type GlassCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  readonly children: ReactNode;
  readonly className?: string;
  readonly interactive?: boolean;
};

const baseClasses =
  "rounded-2xl bg-white/30 backdrop-blur-md backdrop-saturate-150 border border-white/40 shadow-glass";

const interactiveClasses =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/70 hover:shadow-glass-lg";

export default function GlassCard({
  children,
  className = "",
  interactive = false,
  ...rest
}: GlassCardProps) {
  const composed = [
    baseClasses,
    interactive ? interactiveClasses : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={composed}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
