import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function PythonIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3c-2.5 0-4 1.5-4 3v2h4" />
      <path d="M8 8H6c-2 0-3 1.5-3 4s1 4 3 4h2" />
      <path d="M12 21c2.5 0 4-1.5 4-3v-2h-4" />
      <path d="M16 16h2c2 0 3-1.5 3-4s-1-4-3-4h-2" />
      <path d="M8 8h8" />
      <path d="M8 16h8" />
      <circle cx="10" cy="5.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="18.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloudCodeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 18a4 4 0 1 1 .8-7.92A6 6 0 0 1 19 12a4 4 0 0 1 0 8H7z" />
      <path d="M9.5 14.5 8 13l1.5-1.5" />
      <path d="M14.5 11.5 16 13l-1.5 1.5" />
    </svg>
  );
}

export function ClaudeCodeIcon(props: IconProps) {
  return (
    <svg
      {...baseProps}
      stroke="#D97757"
      strokeWidth={2.6}
      {...props}
    >
      <path d="M12.00 10.80L12.00 1.80" />
      <path d="M12.60 10.96L15.70 5.59" />
      <path d="M13.04 11.40L20.14 7.30" />
      <path d="M13.20 12.00L19.00 12.00" />
      <path d="M13.04 12.60L20.66 17.00" />
      <path d="M12.60 13.04L15.80 18.58" />
      <path d="M12.00 13.20L12.00 21.60" />
      <path d="M11.40 13.04L8.40 18.24" />
      <path d="M10.96 12.60L3.17 17.10" />
      <path d="M10.80 12.00L4.60 12.00" />
      <path d="M10.96 11.40L4.03 7.40" />
      <path d="M11.40 10.96L8.50 5.94" />
    </svg>
  );
}

export function GhlIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M8.2 6h7.6" />
      <path d="M6 8.2v7.6" />
      <path d="M18 8.2v7.6" />
      <path d="M8.2 18h7.6" />
      <path d="M8 8l8 8" />
    </svg>
  );
}
