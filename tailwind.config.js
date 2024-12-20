/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlue: "#1254AB",
      lightBlue: "#0c66e4",
      headerBlue: "#388BFF0F",
      headerText: "#388BFF",
      blue: colors.blue,
      green: colors.green,
      red: colors.red,
      gray: colors.gray,
      white: colors.white,
    },
    extend: {
      fontSize: {
        tiny: "30px",
        middle: "80px",
        huge: "100px",
      },
      fontFamily: {
        "sf-pro": ["SF Pro", "sans-serif"], // Updated to match the CSS
      },
    },
  },
  plugins: [],
};
