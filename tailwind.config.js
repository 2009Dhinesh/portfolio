/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#C7B9FF",
        navy: "#0F172A",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
       animation: {
        'slow-spin': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}
