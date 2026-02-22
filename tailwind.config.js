/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '420px',   // custom phone size
      sm: '600px',   // changed from 640
      md: '768px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [
   require('tailwind-scrollbar-hide')
  ],
};
