/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      white:'#ffffff',
      primary: '#3A032E',
      ligth:'#FEFEFE',
      grey:'#EBEAEB',
      darkblue:'#111B2B',
      black:'#000000',
      border:'#AFB0B6'
    },
    
  },
  plugins: [],
}