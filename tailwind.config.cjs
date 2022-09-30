/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow', 'sans-serif']
    },
    extend: {
      colors: {
        'myPink': '#EE0E7D',
      },
      boxShadow: {
        'products': '0px 32px 32px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
