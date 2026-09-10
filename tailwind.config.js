/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        generalsans: ["General Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}