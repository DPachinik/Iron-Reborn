/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        inicio:'#121212',
        final:'#212b46'
      },
      fontFamily:{
        poppins:'Poppins'
      }
    },
  },
  plugins: [],
}