/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
    },
  },
  plugins: [],
}