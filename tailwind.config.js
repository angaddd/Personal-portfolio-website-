/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite GB J"', 'cursive'],
        lora: ['Lora', 'serif'],
        ptserif: ['"PT Serif"', 'serif'],
      }
    },
  },
  plugins: [],
}
