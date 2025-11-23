/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- makes Tailwind scan all components
  ],
  theme: { extend: {} },
  plugins: [],
};
