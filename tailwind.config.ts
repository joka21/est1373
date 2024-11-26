import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      deepTeal: "#003547",
      seaGreen: "#005E54", 
      chartreuse: "#C2BB00",
      coral: "#E1523D",
      tangerine: "#ED8B16",
      black: "#000000",
      white: "#FFFFFF"
    },
  },
  plugins: [],
} satisfies Config;