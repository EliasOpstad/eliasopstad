import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,scss,sass,less,styl,stylus}",

  ],
  darkMode: "class", // eller 'media' for å følge systeminnstillinger
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",       // Legg til flere farger om nødvendig
        secondary: "var(--secondary)",
      },
    },
  },
    
  plugins: [],
} satisfies Config;
