/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom1': '0px 4px 4px 0px #00000040',
        'custom2': '0px 10px 10px 0px #00000040',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        customPurple: '#6D20BB',
      },
      borderRadius: {
        'custom1': '0px 0px 130px 0px',
        'custom2': '0px 0px 90px 0px',
      },
    },
  },
   variants: {},
  plugins: [],
}

