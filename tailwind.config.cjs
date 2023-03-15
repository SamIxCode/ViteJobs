/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenColor': '#099c11',
        'cardShadow': '#f0f1f2',
        'textColor': '#2e302f',
        'greyColor': '#dee0e3',
        'whiteSmoke': '#f5f5f5',
        'darkerGrey': '#b5b5b5'
      }
    },
  },
  plugins: [],
}
