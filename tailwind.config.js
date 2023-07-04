/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/**/*.tsx",
    "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {
      colors:{
        'sky':{
          500:'#4476a2',
          700:'#2d4f6c'
        }
      }
    },
  },
  plugins: [],
}

