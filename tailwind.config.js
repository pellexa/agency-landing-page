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
      xl: ['1.5rem', { lineHeight: '2rem', fontWeight: 400 }], // 24px/32
      '2xl': ['2rem', { lineHeight: '2.5rem', fontWeight: 400 }], // 32px/40
      '3xl': ['2rem', { lineHeight: '2.5rem', fontWeight: 700 }], // 32px/40
      '4xl': ['3rem', { lineHeight: '6.25rem', fontWeight: 700 }], // 48px/100
      '5xl': ['3.5rem', { lineHeight: '8.3125rem', fontWeight: 700 }], // 56px/133
      '6xl': ['6rem', { lineHeight: '7.5rem', fontWeight: 700 }], // 96px/120
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
        h1: { fontSize: theme('fontSize.6xl') },
        h2: { fontSize: theme('fontSize.5xl') },
        h3: { fontSize: theme('fontSize.4xl') },
        h4: { fontSize: theme('fontSize.3xl') },
        h5: { fontSize: theme('fontSize.2xl') },
        h6: { fontSize: theme('fontSize.xl') },
      });
    }),
  ],
};
