/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B7E9B',
        secondary: '#C5B3CD',
        background: '#F3E9F6',
        text: '#2D283E',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(139, 126, 155, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B7E9B 0%, #C5B3CD 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}