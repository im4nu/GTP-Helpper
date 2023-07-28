/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#252525',
        'white-200': '#ffffffd3',
        main: '#522987',
        accent: '#6376A4',
        gray: '#676767,'
      },
      backgroundImage: {
        'circles': "url('/svg/bg.svg')",
      },
    },
  },
  plugins: [],
}
