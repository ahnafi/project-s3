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
        love: ["Love Craft", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "yellow-base": "#FFAA19",
        "red-base": "#961522",
        "green-base": "#22c55e",
        "yellow-light": "#E8DCA8",
        "red-light": "#FF907D",
        "green-light": "#00b855",
        "white-base": "#f1f5f9",
        "dark-base": "#0f172a",
        "blue-base": "#316fe8",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        green: "5px 3px 3px rgba(34, 197, 94, 0.5)",
        yellow: "5px 3px 3px rgba(234, 179, 8, 0.5)",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        marqueeReverse: "marqueeReverse 50s linear infinite",
        downUp: "downUp 8s linear infinite",
        upDown: "upDown 8s linear infinite",
        cloud: "cloud 30s linear infinite",
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
        downUp: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(48px)" },
          "100%": { transform: "translateY(0px)" },
        },
        upDown: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-48px)" },
          "100%": { transform: "translateY(0px)" },
        },
        cloud: {
          "0%": { transform: "translateX(0)", opacity: 0 },
          "10%": { opacity: 0.8 },
          "100%": { transform: "translateX(100vw)" },
        },
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
