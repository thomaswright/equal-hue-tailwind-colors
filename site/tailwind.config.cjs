/** @type {import('tailwindcss').Config} */
import colors from "../index";

module.exports = {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  plugins: [],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.6rem",
      },
      colors: {
        ...colors,
        plain: colors["slate"],
      },
    },
  },
};
