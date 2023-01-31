/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ ,
    './public/**/*.html',
    './public/**/*.js'
],
  theme: {
    extend: {
      backgroundImage: {
        'lupa-img': "url('/public/img/lupa.png')", 
      },
      colors: {
        'menu': "#1f4e70",
        apple: "#f5f5f7"
      },
      width: {
        content: "fit-content",
      },
      top: {
        20: "5rem",
      }
    },
  },
  plugins: [],
}
