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
        glow: '0 0 15px rgba(255, 255, 255, 0.8)',
        glowRed: '0 0 15px rgba(255, 0, 0, 0.9)',
      },
      backgroundImage:{
        logo:"url('r.png')",
        radial: 'radial-gradient(var(--tw-gradient-stops))',
        mosaico:"url('mosaico.png')",
        arco:"url('arco1.svg')",
        elipses:"url('elipses.svg')",
        elipse:"url('elipse.svg')",

      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({

        ".clip-diagonal-izquierdo":{
        clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)"
        },
        ".clip-diagonal-derecho":{
        clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)"
        },

        ".clip-diagonal-menor":{
        clipPath:"polygon(20% 0, 100% 0, 100% 80%, 79% 100%, 0 100%, 0 21%)"
        },
        
      
      });
    },
    textShadow,
  ],
}