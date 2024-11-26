/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // coloures used in this project 
      colors:{
        primary:"#2B85FF",
        secondary:"EF863E"
      }
    },
  },
  plugins: [],
}

