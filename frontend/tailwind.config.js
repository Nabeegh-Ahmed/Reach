const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#58CCED',
        secondary: 'rgba(88, 204, 237, 0)',
        
        ...colors
      },
    },
  },
  plugins: [],
}
