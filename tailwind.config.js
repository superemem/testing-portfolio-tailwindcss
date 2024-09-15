/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        primary: '#1e3a8a',
      },
      screen: {
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
};