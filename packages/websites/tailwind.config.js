import jswPresets from '@jswork/presets-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [jswPresets()],
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {}
  },
  plugins: ['prettier-plugin-tailwindcss']
};
