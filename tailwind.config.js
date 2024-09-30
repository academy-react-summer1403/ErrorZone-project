// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#2F2F2F",
        blackPanel: "#242424",
        white: "#FCFCFC",
        blue: "#3772FF",
        red: "#FF5353",
      },
      fontFamily: {
        "DanaFaNum-100": "DanaFaNum Hairline",
        "DanaFaNum-200": "DanaFaNum Thin",
        "DanaFaNum-300": "DanaFaNum UltraLight",
        "DanaFaNum-400": "DanaFaNum Light",
        "DanaFaNum-500": "DanaFaNum Regular",
        "DanaFaNum-600": "DanaFaNum Medium",
        "DanaFaNum-700": "DanaFaNum DemiBold",
        "DanaFaNum-800": "DanaFaNum Bold",
        "DanaFaNum-900": "DanaFaNum ExtraBold",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};