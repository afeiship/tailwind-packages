/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@jswork/presets-tailwind")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
