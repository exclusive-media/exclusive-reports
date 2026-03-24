// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(card|ripple).js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'var(--font-ethiopic)', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};