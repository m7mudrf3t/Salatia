/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm:	'640px',
      md:	'768px',
      lg:	'1024px',
      xl:	'1280px'
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        whitehsl: 'hsl(0,0%,100%)',
        Platinum : '#e5e5e5',
        Platinumhsl: 'hsl(0,0%,89.8%)',
        DarkTangerine:  '#fca311',
        DarkTangerineHsl:  'hsl(37.3,97.5%,52.7%)',
        YankeesBlue:  '#14213d',
        YankeesBlueHsl: 'hsl(221,50.6%,15.9%)',
        Black:  '#000000',
        BlackHsl: 'hsl(0,0%,0%)'
      }
    },
  },
  plugins: [],
}