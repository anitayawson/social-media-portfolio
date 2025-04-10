/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/pages/**/*.{js,jsx}",
    ".src/components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        socialPink: "#FD1D1D",
        socialOrange: "#F56040",
        socialBlue: "#3897f0",
      },
    },
  },
  plugins: [],
};
