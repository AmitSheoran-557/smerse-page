import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1172px",
        },
      },
      colors: {
        lightBlue: "#0A0A2B80",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/webp/hero-pattern.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
