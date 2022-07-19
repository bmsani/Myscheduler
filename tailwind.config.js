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
          primary: "#00CDCA",
          secondary: "#251D58",
          accent: "#37cdbe",
          neutral: "#010E30",
          "base-100": "#f3ffff",
        },
      },
    ],
  },
};