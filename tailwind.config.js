/** @type {import('tailwindcss').Config} */
const colors = {
  primary: "#22237F",
  secondary: "#B165E9",
  alternative: "#4DA2ED",
  success: "#F074A8",
  error: "#6a1143",
  info: "#222996",
  warning: "#bb4d1d",
  background: "#FFFFFF",
  neutral: "#EBF8FF",
  text: "#FFFFFF",
  paper: "#FFFFFF",
  main: "#F7F9FB",
  body: "#02020E",
  black: "#000000",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: colors.primary,
      secondary: colors.secondary,
      alternative: colors.alternative,
      paper: colors.paper,
      success: colors.success,
      error: colors.error,
      info: colors.info,
      warning: colors.warning,
      black: colors.black,
      body: colors.body,
      white: colors.text,
      main: colors.main,
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      DmSans: ["DM Sans", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      // spacing: {
      //   px: "1px",
      //   0: "0",
      //   0.5: "0.125rem",
      //   1: "0.25rem",
      //   1.5: "0.375rem",
      //   2: "0.5rem",
      //   2.5: "0.625rem",
      //   3: "0.75rem",
      //   3.5: "0.875rem",
      //   4: "1rem",
      //   5: "1.25rem",
      //   6: "1.5rem",
      //   7: "1.75rem",
      //   8: "2rem",
      //   9: "2.25rem",
      //   10: "2.5rem",
      //   11: "2.75rem",
      //   12: "3rem",
      //   14: "3.5rem",
      //   16: "4rem",
      //   20: "5rem",
      //   24: "6rem",
      //   28: "7rem",
      //   32: "8rem",
      //   36: "9rem",
      //   40: "10rem",
      //   44: "11rem",
      //   48: "12rem",
      //   52: "13rem",
      //   56: "14rem",
      //   60: "15rem",
      //   64: "16rem",
      //   72: "18rem",
      //   80: "20rem",
      //   96: "24rem",
      // },

      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: `0px 2px 1px -1px ${colors.primary}1A, 0px 1px 1px 0px ${colors.primary}14, 0px 1px 3px 0px ${colors.primary}12`,
        md: `0px 3px 1px -2px ${colors.primary}1A, 0px 2px 2px 0px ${colors.primary}14, 0px 1px 5px 0px ${colors.primary}12`,
        lg: `0px 3px 3px -2px ${colors.primary}1A, 0px 3px 4px 0px ${colors.primary}14, 0px 1px 8px 0px ${colors.primary}12`,
        xl: `0px 2px 4px -1px ${colors.primary}1A, 0px 4px 5px 0px ${colors.primary}14, 0px 1px 10px 0px ${colors.primary}12`,
        "2xl": `0px 3px 5px -1px ${colors.primary}1A, 0px 5px 8px 0px ${colors.primary}14, 0px 1px 14px 0px ${colors.primary}12`,
        "3xl": `0px 3px 5px -1px ${colors.primary}1A, 0px 6px 10px 0px ${colors.primary}14, 0px 1px 18px 0px ${colors.primary}12`,
        "4xl": `0px 4px 5px -2px ${colors.primary}1A, 0px 7px 10px 1px ${colors.primary}14, 0px 2px 16px 1px ${colors.primary}12`,
        "5xl": `0px 5px 5px -3px ${colors.primary}1A, 0px 8px 10px 1px ${colors.primary}14, 0px 2px 18px 2px ${colors.primary}12`,
        inner: `inset 0px 2px 4px 0px ${colors.primary}20`,
        none: "none",
      },
    },
  },
  plugins: [],
};