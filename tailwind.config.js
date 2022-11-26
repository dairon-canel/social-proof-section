/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {},
    minWidth: {
      375: '375px',
    },
    colors: {
      VeryDarkMagenta: 'hsl(300, 43%, 22%)',
      SoftPink: 'hsl(333, 80%, 67%)',
      DarkGrayishMagenta: 'hsl(303, 10%, 53%)',
      LightGrayishMagenta: 'hsl(300, 24%, 96%)',
      White: 'hsl(0, 0%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      400: '400',
      500: '500',
      700: '700',
    },
  },
  plugins: [],
};
