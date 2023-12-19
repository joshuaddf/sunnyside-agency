/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {

    //Primary

    "Soft-red": 'hsl(7, 99%, 70%)',
    "Yellow": 'hsl(51, 100%, 49%)',

      // (graphic design text)
    "Dark-desaturated-cyan":' hsl(167, 40%, 24%)',

      // (photography text)
    "Dark-blue":' hsl(198, 62%, 26%)',

      // (footer)
    "Dark-moderate-cyan": 'hsl(168, 25%, 30%)',
    "Dark-moderate-cyan-link": 'hsla(168, 25%, 30%, 0.7)',
    "Dark-moderate-cyan-wall": 'hsl(171, 54%, 66%)',

    //Neutral

    "Very-dark-desaturated-blue":' hsl(212, 27%, 19%)',
    "Very-dark-grayish-blue": 'hsl(213, 9%, 39%)',
    "Dark-grayish-blue":' hsl(232, 10%, 55%)',
    "Grayish-blue": 'hsl(210, 4%, 67%)',
    "White": 'hsl(0, 0%, 100%)',
    "White-nav": 'hsla(0, 0%, 100%, 0.7)',
    "White-hover": 'hsla(0, 0%, 100%, 0.4)',
    },
    extend: {},
  },
  plugins: [],
}

