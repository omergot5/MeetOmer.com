import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#111827",
          soft: "#374151",
          mute: "#6B7280",
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-lg": "0 12px 48px 0 rgba(31, 38, 135, 0.10)",
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(at 12% 8%, rgba(186, 230, 253, 0.55) 0px, transparent 55%), radial-gradient(at 88% 0%, rgba(199, 210, 254, 0.50) 0px, transparent 55%), radial-gradient(at 50% 100%, rgba(224, 231, 255, 0.55) 0px, transparent 60%), radial-gradient(at 0% 100%, rgba(207, 250, 254, 0.45) 0px, transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
