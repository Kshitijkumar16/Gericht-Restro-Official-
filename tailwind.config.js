/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideBottom:
          "slideBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
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
      },
      animation: {
        pulse: "pulse 5s ease-in-out infinite",
        spin: "spin 17s linear infinite",
        blob: "blob 7s infinite",
        tickerAni: "tickerAni 30s linear infinite",
      },
      boxShadow: {
        sh_gold: "0px 0px 15px 3px #DCCA87",
      },
    },
    plugins: [],
  },
};
