/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fondoInicio:'#121212',
        fondoFinal:'#212b46',
        
      },
      fontFamily:{
        poppins:'Poppins',
        exo:'Exo'
      }
    },
  },
  plugins: [],
}