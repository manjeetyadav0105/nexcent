/** @format */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(), 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      lineHeight: {
        76: "76px",
      },
      fontSize: {
        64: "64px",
      },
      colors: {
        neutral: "#F5F7FA",
        primary: "#4CAF4F",
        d_gray: "#4D4D4D",
        gray: "#717171",
        silver: "#F5F7FA",
        black: "#263238",
        "gray-700": "gray-700",
        gray: {
          400: "#cbd5e0",
          800: "#2d3748",
        },

      },
      screens: {
        'xxxs':'319px',
        'xxs': '390px',
        'xs': '424px',
        'xss':'530px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
