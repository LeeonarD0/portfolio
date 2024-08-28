/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      background: '#1f242d',
      white: '#FFFFFF',
      green: '#39FF14',
      gradientBlackStart: '#020024',
      gradienGreenMid: '#124c1f',
      gradientGreenEnd: '#38ff14'

    },
    extend: {},
  },
  plugins: [],
}

