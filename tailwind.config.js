/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

