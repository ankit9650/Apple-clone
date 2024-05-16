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
        'Cedarville_Cursive':['Cedarville Cursive', 'sans-serif']
       
        
      
      },width: {
        '700': '64rem;',
      
      }
    },
  },
  plugins: [],
}
