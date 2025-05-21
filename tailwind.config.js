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
      backgroundImage:{
        nutriologa:"url('nutriologa.jpg')",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-tl-45": {
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)",
        },
        ".clip-tr-45": {
          clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
        },
        ".clip-bl-45": {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)",
        },
        ".clip-br-45": {
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        },
        ".clip-bottom-convex": {
          clipPath: "ellipse(80% 90% at 50% 100%)",
        },
        ".clip-tl-br-45": {
        clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
      },
      });
    },
    textShadow,
  ],
}