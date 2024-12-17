/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontSize: {
        'custom': 'calc(1.625rem + 3.5vw)', // Define un tamaño de fuente personalizado
      },
      lineHeight: {
        'custom': '4.5rem', // Define una altura de línea personalizada
      },
    },
  },
  plugins: [
    // require('tailwindcss-animated'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}

