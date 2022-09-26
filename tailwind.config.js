/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/*.{html,js}"
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      "sans" : ["'Poppins'"]

    },
    extend: {
      colors: {
        'oslo-gray': {
          DEFAULT: '#7F8C8D',
          '50': '#E0E3E3',
          '100': '#D5DADA',
          '200': '#C0C6C7',
          '300': '#AAB3B3',
          '400': '#959FA0',
          '500': '#7F8C8D',
          '600': '#646F70',
          '700': '#495252',
          '800': '#2F3435',
          '900': '#151717'
        },
        'zest': {
          DEFAULT: '#E67E22',
          '50': '#F9DEC7',
          '100': '#F7D4B5',
          '200': '#F2BE90',
          '300': '#EEA96B',
          '400': '#EA9347',
          '500': '#E67E22',
          '600': '#BB6315',
          '700': '#88480F',
          '800': '#562E0A',
          '900': '#241304'
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}
