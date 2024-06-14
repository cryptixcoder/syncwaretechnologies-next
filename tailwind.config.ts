import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      display: ["Oswald", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        primary: {
          100: "#FFE3F0",
          200: "#F0B3D0",
          300: "#EB8BB8",
          400: "#E870A8",
          500: "#E3448F",
          600: "#D92378",
          700: "#D60A69",
          800: "#B90659",
          900: "#9F044C",
        },
        secondary: {
          100: "#D9E6FF",
          200: "#ACC1EA",
          300: "#8CAAE3",
          400: "#7195D9",
          500: "#698DD1",
          600: "#5881CE",
          700: "#4A76C9",
          800: "#3D60A3",
          900: "#314C81",
        },
        black: {
          DEFAULT: "#212529",
        },
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
