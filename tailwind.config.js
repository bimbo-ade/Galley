/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      purple: " #A02279",
      black: "#000",
      white: "#FFFFFF",
      gray: "#D7D7D7",
      bgBlack: " #1D1D1E;",
    },
    fontFamily: {
      rose: ["Poppins"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 500,
      xbold: 600,
      xxbold: 700,
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
