/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.{js,html}", "./**/*.{js,html}"],
  theme: {
    container: {
      center: true,
      padding: ".5rem",
    },
    extend: {
      fontFamily: {
        operator: ["'Fira Code'"],
      },
      colors: {
        dark: '#000000',
        primary: '#15F5BA',
      },
    },
  },
  plugins: [],
};
