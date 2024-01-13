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
      },
      backgroundImage: {
        CustomLinear: "var(--Gd, linear-gradient(82deg, #FF7A00 24.9%, #FFB800 96.57%))",
     },
     
    },
    screens: {
      md: "428px",
      cd: "1400px"
    }
  },
  plugins: [],

}
