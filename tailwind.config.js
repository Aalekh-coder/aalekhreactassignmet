/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'pd': '375px', 
        'cd':"1440px"
      },
    },
  },
  plugins: [],
}

