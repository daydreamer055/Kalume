/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      },
    },
  },
  plugins: [],
};