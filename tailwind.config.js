const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Clash Grotesk"', "sans-serif"],
    },
    fontSize: {
      sm: { "0.875rem": { fontWeight: 400 } }, // 14px
      base: { "1rem": { fontWeight: 500 } }, // 16px
      lg: { "1.125rem": { fontWeight: 400 } }, // 18px
      xl: { "1.5rem": { fontWeight: 400 } }, // 24px
      "2xl": { "2rem": { fontWeight: 400 } }, // 32px
      "3xl": { "2rem": { fontWeight: 700 } }, // 32px
      "4xl": { "3rem": { fontWeight: 700 } }, // 48px
      "5xl": { "3.5rem": { fontWeight: 700 } }, // 56px
      "6xl": { "6rem": { fontWeight: 700 } }, // 96px
    },
    screens: {
      lg: "1440px", // => @media (min-width: 1440px) { ... } 2xl
      md: "1024px", // => @media (min-width: 1024px) { ... } lg
      sm: "375px", // => @media (min-width: 375px) { ... } xs
    },
    extend: {
      colors: {
        primary: "#fad007",
        secondary: "#07070a",
        tertiary: "#39393b",
        shade: "#f6f6f6",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".btn": {
          color: theme("colors.tertiary"),
          backgroundColor: theme("colors.primary"),
          padding: `${theme("spacing.4")} ${theme("spacing.8")}`,
        },
      });
    }),

    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.6xl") },
        h2: { fontSize: theme("fontSize.5xl") },
        h3: { fontSize: theme("fontSize.4xl") },
        h4: { fontSize: theme("fontSize.3xl") },
        h5: { fontSize: theme("fontSize.2xl") },
        h6: { fontSize: theme("fontSize.xl") },
      });
    }),
  ],
};
