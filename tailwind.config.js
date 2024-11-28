// tailwind.config.js
const {nextui} = require("@nextui-org/react");

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
        "gray-100": "#F6F6F6",
        "gray-200": "#F1F1F1",
        "gray-400": "#DCDCDC",
        "gray-800": "#707070",
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
      screens:{
        mobile: "600px",
        tablet: "800px",
        desktop: "1000px",
        tv: "1200px",
      },
      fontSize:{
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "40px",
        "7xl": "44px",
        "8xl": "48px",
        "9xl": "52px",
        "10xl": "56px",
        "11xl": "60px",
        "12xl": "64px",
        "13xl": "68px",
        "14xl": "72px",
        "15xl": "76px",
        "16xl": "80px",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
// npx tailwindcss -i ./src/index.css -o ./src/app/appcss/App.css --watch

