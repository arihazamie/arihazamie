import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/page.tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "1": "#88AB8E",
        "2": "#AFC8AD",
        "3": "#EEE7DA",
        "4": "#F2F1EB",
      },
    },
  },
  plugins: [],
};
export default config;
