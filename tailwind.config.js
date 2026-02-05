/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        accent: "#f97316",
      },
    },
  },
  plugins: [],
}