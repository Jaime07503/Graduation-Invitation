/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#DAA520",
          light: "#FFD700",
        },
      },
    },
  },
  plugins: [],
};
