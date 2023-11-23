/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3lap": "1671px",
      "2lap": "1523px",
      lap: "1441px",
      xl: "1281px",
      lg: "1025px",
      md: "769px",
      sm: "641px",
      xsm: "481px",
      "2xsm": "321px",
    },
    extend: {
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px, -30px) scale(1.2)",
          },
          "66%": {
            trasnform: "translate(-30px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        tickerAni: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
      colors: {
        golden: "#DCCA87",
        black: "#0C0C0C",
        gray: "#AAAAAA",
        crimson: "#F5EFDB",
      },
      fontFamily: {
        cormorant: ["Cormorant Upright", "serif"],
        alt: ["Open Sans", "sans-serif"],
        Bigelow: ["Bigelow Rules", "cursive"],
        Manrope: ["Manrope", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        spin: "spin 17s linear infinite ",
        spinR: "spin 17s linear infinite reverse",
        spinS: "spin 60s linear infinite",
        blob: "blob 7s infinite",
        tickerAni: "tickerAni 30s linear infinite",
        tickerG: "tickerAni 55s linear infinite",
        tickerGr: "tickerAni 55s linear infinite reverse",
      },
      boxShadow: {
        sh_gold: "0px 0px 15px 3px #DCCA87",
        sh_white: "0px 0px 15px 3px #FFFFFF",
        bg_gold: "0px 0px 4px 1px #DCCA87",
        bg_white: "0px 0px 4px 1px #FFFFFF",
      },
    },
    plugins: [],
  },
};
