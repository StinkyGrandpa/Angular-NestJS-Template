/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main_darkgray: "#313638",
        sec_red: "#f06543",
        third_light_gray: "#e0dfd5",
        fourth_white: "#e8e9eb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};