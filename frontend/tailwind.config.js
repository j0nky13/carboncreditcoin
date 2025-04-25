/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecoGreen: '#97FF00',
        carbonGray: '#3C3C46',
        midnight: '#1C1537',
        blurple: '#6E00FF',
        tangerine: '#FF9700',
        cosmicIndigo: '#3C0096',
        dark: '#1C1537',   // Custom background alias
      },
    },
  },
  plugins: [],
}