/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/screens/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        sky: {
          500: '#4476a2',
          700: '#2d4f6c',
        },
      },
      fontFamily: {
        latoThin: ['Lato_100Thin'],
        latoLight: ['Lato_300Light'],
        latoRegular: ['Lato_400Regular'],
        latoBold: ['Lato_700Bold'],
        montserratRegular: ['Montserrat_400Regular'],
        montserratBold: ['Montserrat_700Bold'],
      },
    },
  },
  plugins: [],
}
