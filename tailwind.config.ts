import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#00A651",
          50: "#E6F7EE",
          100: "#C2EBD4",
          500: "#00A651",
          600: "#008F45",
          700: "#007238",
        },
        yellow: {
          DEFAULT: "#FFD100",
          50: "#FFFAE6",
          100: "#FFF3B3",
          500: "#FFD100",
          600: "#E6BC00",
        },
        navy: {
          DEFAULT: "#1A2B4A",
          50: "#EEF1F7",
          100: "#C8D1E5",
          500: "#1A2B4A",
          600: "#14223B",
          700: "#0E192C",
        },
        graphite: {
          DEFAULT: "#2D2D2D",
          light: "#555555",
          muted: "#888888",
        },
        surface: {
          DEFAULT: "#F8F9FA",
          dark: "#F0F1F3",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      spacing: {
        section: "7rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "count-up": "countUp 2s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        card: "0 2px 20px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.08)",
        glow: "0 0 40px rgba(0,166,81,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
