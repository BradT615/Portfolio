/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        customBg: '#292b4d',
        customBgLight: '#353766',
        lightBlue: '#17d1e0',
        customDarkBlue: '#30587b',
        customPrimaryText: '#f1f1f4',
        customText: '#9499c4',
        customHeader: '#d4d4db'
      },
    },
  },
  plugins: [],
}

