/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#09090A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
