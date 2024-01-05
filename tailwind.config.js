export const content = ["./src/**/*.{html,js}"];
export const theme = {
  screens: {
    "2xl": "1440px", // => @media (min-width: 1440px) { ... }
    lg: "1024px", // => @media (min-width: 1024px) { ... }
    xs: "375px", // => @media (min-width: 375px) { ... }
  },
  extend: {
    colors: {
      "dark-color": "#07070A",
      "accent-color": "#FAD007",
    },
    transitionProperty: {
      "bg-color": "background-color",
    },
  },
};
export const plugins = [];
