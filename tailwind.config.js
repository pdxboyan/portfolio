/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["'Press Start 2P'", "serif"],
        title: ["Cantarell-Bold", "serif"],
        text: ["Cantarell-Regular", "serif"],
        subtext: ["Cantarell-Italic", "serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}