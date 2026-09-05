import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07090C",
          900: "#0A0D12",
          850: "#0D1117",
          800: "#10151C",
          700: "#161C25",
          600: "#212934",
          500: "#3A4552",
          400: "#5C6774",
          300: "#8890A0",
          200: "#B4BAC4",
          100: "#D9DCE2",
          50: "#EEF0F3",
        },
        signal: {
          ai: "#5EEAD4",
          erp: "#E8A33D",
          automation: "#8B93F8",
          danger: "#F0665C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(217,220,226,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(217,220,226,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
