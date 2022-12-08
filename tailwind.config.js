/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-1': '#000000',
        'black-2': '#141515',
        'black-3': '#2F2F2F',
        'orange-cst': '#FFB800',
        'turqoise-cst': '#1FC1A4'
      }
    }
  },
  plugins: []
};
