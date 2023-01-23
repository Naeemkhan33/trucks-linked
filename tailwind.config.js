/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#F5F5F5",
        bodyText: "#230760",
        muted: "",
        primary: "#F2632F",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        button: "7px 7px 0px 0px #222222;",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
