export const content = ["./src/**/*.{html,js}"];
export const theme = {
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
    "2xl": "1440px", // => @media (min-width: 1440px) { ... }
    lg: "1024px", // => @media (min-width: 1024px) { ... }
    xs: "375px", // => @media (min-width: 375px) { ... }
  },
  extend: {
    colors: {
      "accent-color": "#fad007",
      "text-color": "#07070a",
      "text-2-color": "#039393b",
      "white-75": "#f6f6f6",
    },
    transitionProperty: {
      "bg-color": "background-color",
    },
  },
};
export const plugins = [];
