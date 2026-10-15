/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1220',
        },
        'navy-secondary': {
          DEFAULT: '#14233B',
        },
        gold: {
          DEFAULT: '#D4AF62',
        },
        'gray-light': {
          DEFAULT: '#F3F5F8',
        },
        'gray-text': {
          DEFAULT: '#667085',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
