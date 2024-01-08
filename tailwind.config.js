const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    fontFamily: {
      sans: ['Clash Grotesk', 'sans-serif'],
    },
    fontSize: {
      sm: ['0.875rem', { lineHeight: '1.25rem', fontWeight: 400 }], // 14px/20
      base: ['1rem', { lineHeight: '1.5rem', fontWeight: 500 }], // 16px/24
      lg: ['1.125rem', { lineHeight: '2rem', fontWeight: 400 }], // 18px/32
    },
    screens: {
      lg: '1440px', // => @media (min-width: 1440px) { ... } 2xl
      md: '1024px', // => @media (min-width: 1024px) { ... } lg
      sm: '375px', // => @media (min-width: 375px) { ... } xs
    },
    extend: {
      colors: {
        primary: '#fad007',
        secondary: '#07070a',
        tertiary: '#39393b',
        shade: '#f6f6f6',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        html: { fontSize: '16px' },
        h1: { fontSize: '6rem', lineHeight: '1rem', fontWeight: '700' },
        h2: { fontSize: '3.5rem', lineHeight: '1rem', fontWeight: '700' },
        h3: { fontSize: '3rem', lineHeight: '1rem', fontWeight: '700' },
        h4: { fontSize: '2rem', lineHeight: '2.5rem', fontWeight: '700' },
        h5: { fontSize: '2rem', lineHeight: '2.5rem', fontWeight: '400' },
        h6: { fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '400' },
      });
    }),
  ],
};
