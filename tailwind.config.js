/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#02254b",
          secondary: "#9c8321",
          // accent: "#6688CC",
          neutral: "#181A2A",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};