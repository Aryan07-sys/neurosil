/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ REQUIRED
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
};
