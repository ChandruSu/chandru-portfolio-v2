import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helv: ['"Helvetica"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#09090b",
        light: "#f8fafc",
      },
      cursor: {
        override: "url(cursor.svg), auto",
        "override-dark": "url(cursor-dark.svg), auto",
      },
      listStyleType: {
        "disclosure-closed": "disclosure-closed",
      },
    },
  },
  plugins: [],

  darkMode: "class",
};
export default config;
