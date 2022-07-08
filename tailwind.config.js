/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    }
  },
  plugins: [],
}
