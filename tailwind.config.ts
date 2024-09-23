import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      cursor: {
        override: "url(cursor.svg), auto",
        "override-dark": "url(cursor-dark.svg), auto",
      },
    },
  },
  plugins: [],

  darkMode: "class",
};
export default config;
