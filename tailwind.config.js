/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    fontFamily:{
      primary: "Montserrat",
      secondary:'Jost'
    },
    backgroundImage:{
      hero:'url(/asset/img/hero-bg.png)'
    },
    extend: {
      colors:{
        primary:'#ff6929'
      }
    },
  },
  plugins: [],
}

