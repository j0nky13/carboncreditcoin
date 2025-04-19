/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        'spin-slow': 'spin 6s linear infinite',
      },
      colors: {
        primary: '#97FF00',       // same as eco
        dark: '#0d0d0d',
        cosmic: '#3C0096',        // Cosmic Indigo
        carbon: '#3C3C46',        // Carbon Gray
        midnight: '#1C1537',      // Midnight
        eco: '#97FF00',           // Eco Mouse Green
        blurple: '#6E00FF',       // Blurple
        tangerine: '#FF9700',     // Tangerine (least favored)
      },
    },
  },
  plugins: [],
};