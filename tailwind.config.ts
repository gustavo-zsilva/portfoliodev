import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#D9D9D9',
        'bg-dark': '#191919',
        'pink': '#E70FAA',
        'baby-blue': '#00C0FD',
      }
    },
  },
  plugins: [],
};
export default config;
