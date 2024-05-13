import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#D9D9D9",
        "light-gray": "#A7A7A7",
        dark: "#191919",
        light: "#D6DBDC",
        pink: "#E70FAA",
        "baby-blue": "#00C0FD",
        "light-dark": "#232323",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      boxShadow: {
        glow: "0px 0px 8px 8px",
      },
    },
  },
  plugins: [],
};
export default config;
