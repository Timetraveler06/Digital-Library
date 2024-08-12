/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'natural-900': '#2a2a2a', // Adjust the hex code to your desired shade of dark graphite
      },
    },
  },
  plugins: [],
}
