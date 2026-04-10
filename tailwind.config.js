/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.jsx",
    "./ajxs-website.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        secondary: '#ea580c',
        accent: '#0891b2',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
