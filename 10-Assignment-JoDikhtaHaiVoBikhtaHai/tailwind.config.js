/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      backgroundGray: "#e1e2e3",
      black: "#000",
      white: "#ffffff",
      yellow: "#efad01"
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      black: '900',
    }
  },
  plugins: [],
};
