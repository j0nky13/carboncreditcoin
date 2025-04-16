
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
        'spin-slow': 'spin 6s linear infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards'
      },
      colors: {
        primary: '#97FF00',
        dark: '#0d0d0d',
      },
     
    },
  },
  plugins: [],
}
