/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Default' : ['monospace'],
      },
      fontSize: {
        '40px': '2.25rem',
        '20px': '1.25rem',
        '16px': '1rem',
      },
      width: {
        'cardw': '57.6875rem',
        'sidenavw':'22.4375rem',
        'contentw': '67.5625rem',
        'modalkonfirmw': '27.313rem',
      },
      height: {
        'cardh': '9.3125rem',
        'modalkonfirmh': '24.063rem',
        'btnlaporanh': '3.125rem',
      },
      colors: {
        'inactive': '#747474',
        'bgsuccess':'#5CD69B',
      },
      borderRadius: {
        'radiuscard' : '1.25rem',
        'radius20' : '1.25rem',
      },
    },
  },
  plugins: [],
}
