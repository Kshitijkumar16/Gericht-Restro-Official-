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
        slideBottom: {
          "0%": {
            transform: "translateY(-25%)",
          },
          "100%": {
            transform: "translateY(0)",
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
      },
      boxShadow: {
        'sh_gold': "0px 0px 15px 3px #DCCA87",
      },
    },
  },
  plugins: [],
};
