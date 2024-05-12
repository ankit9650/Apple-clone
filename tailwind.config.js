/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '33': '32rem',
      
      },fontFamily: {
        'sr': 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;',
      
      }
    },
  },
  plugins: [],
}