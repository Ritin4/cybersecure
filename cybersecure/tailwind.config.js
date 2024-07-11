/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');

module.exports = {
  content: ["./src/**/*.{js,jsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

