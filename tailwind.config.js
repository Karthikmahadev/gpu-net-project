/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"LINE Seed Sans"', 'sans-serif'], // Default font
      },
    },
  },
  plugins: [],
};
