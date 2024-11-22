const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        'relaxed': '1.15',
      },
      letterSpacing: {
        'normal': '0.01em',
      },
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          light: '#FFE55C',   
          dark: '#B89B00',    
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',   
          darker: '#000000',  
        },
        neutral: {
          light: '#1E1E1E',
          dark: '#141414',
        }
      },
    },
  },
  plugins: [],
} 