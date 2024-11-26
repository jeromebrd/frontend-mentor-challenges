/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
        // custom: [..., 'sans-serif'] new font family
      },
    },
    plugins: [],
  },
};
