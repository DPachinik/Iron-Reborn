/** @type {import('tailwindcss').Config} */

import textShadow from 'tailwindcss-textshadow'
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
      },
      textShadow: {
        glow: '0 0 10px rgba(255, 255, 255, 0.8)',
        glowRed: '0 0 10px rgba(255, 0, 0, 0.8)',
      },
    },
  },
  plugins: [
    textShadow,
  ],
}