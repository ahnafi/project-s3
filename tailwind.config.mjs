import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        body: ["Poppins", ...defaultTheme.fontFamily.sans],
        heading: ["Orelega One", ...defaultTheme.fontFamily.sans],
        jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "yellow-base": "#FFAA19",
        "red-base": "#961522",
        "green-base": "#2F9D70",
        "yellow-light": "#E8DCA8",
        "red-light": "#FF907D",
        "green-light": "#7CC782",
        "white-base": "#f1f5f9",
        "dark-base": "#0f172a",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        // heading: "drop-shadow-[0px_0px_2px] md:drop-shadow-[0px_0px_6px]",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        marqueeReverse: "marqueeReverse 50s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
