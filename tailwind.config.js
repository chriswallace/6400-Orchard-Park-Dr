/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3faf8",
          100: "#d7f0ea",
          200: "#afe0d4",
          300: "#7fc9ba",
          400: "#54ad9d",
          500: "#40a090",
          600: "#2d746a",
          700: "#275e57",
          800: "#234c47",
          900: "#21403c",
          950: "#0e2523",
        },
        accent: {
          50: "#fbf4f7",
          100: "#f7ecf0",
          200: "#f1d9e3",
          300: "#e7bacb",
          400: "#d78fa9",
          500: "#c76d8a",
          600: "#b34f6a",
          700: "#a04058",
          800: "#7f3547",
          900: "#6b303e",
          950: "#401720",
        },
        warm: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        pencerio: ["Pencerio", "cursive"],
      },
    },
  },
  plugins: [],
};
