/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#89F4FA",
          secondary: "#F0e033",
          accent: "#FF78ED",
          neutral: "#6DC2C7",
          "base-100": "#e3fbfc",
        },
      },
    ],
  },
};
