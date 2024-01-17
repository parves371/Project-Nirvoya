/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1400px"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        CustomLinear: "var(--Gd, linear-gradient(82deg, #FF7A00 24.9%, #FFB800 96.57%))",
        CustomLinearSingle: "linear-gradient(180deg, #F2F2F2 0%, #F3F3F3 100%)",
      },

      screens: {
        md: "428px",
        cd: "1400px"
      }
    },
  },
  plugins: [],

}
