/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js, jsx, ts, tsx}',
    './components/**/*.{js, jsx. ts, tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bgDarkColor: '#242424',
      },
      fontFamily: {
        customFont: ["Mulish", "sans-serif"],
      }
    },
  },
  plugins: [],
}
