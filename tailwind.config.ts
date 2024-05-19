import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        white: "#FFF",
        "light-gray": "#A7A7A7",
        dark: "#191919",
        light: "#F3F3F3",
        pink: "#E70FAA",
        "baby-blue": "#00C0FD",
        "light-dark": "#232323",
      },
      animation: {
        infiniteScroll: "infiniteScroll 25s linear infinite",
        fade: "fade 1.5s 2 ease-out alternate forwards",
      },
      keyframes: {
        infiniteScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        fade: {
          from: { opacity: "0", scale: "0.9" },
          "20%": { opacity: "1", scale: "1" },
          to: { opacity: "1", scale: "1" },
        },
      },
      boxShadow: {
        glow: "0px 0px 8px 8px",
      },
      textShadow: {
        DEFAULT: "0 2px 8px var(--tw-shadow-color)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
export default config;
