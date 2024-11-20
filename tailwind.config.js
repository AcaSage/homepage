/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    './src/**/*.{js,jsx}',  './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: ["Georgia", "serif"],
      },
      fontSize: {
        'hero-title': ['5rem', '1.2'], // 80px
        'hero-subtitle': ['2rem', '1.8'], // 32px
        'section-title': ['3rem', '1.4'], // 48px
        'body': ['1.5rem', '1.8'], // 24px
        sm: ['1rem', '1.5'], // 16px
        base: ['1.25rem', '1.75'], // 20px
        lg: ['1.5rem', '2'], // 24px
        xl: ['2rem', '2.5'], // 32px
        '2xl': ['2.5rem', '3'], // 40px
        '3xl': ['3rem', '3.5'], // 48px
        '4xl': ['4rem', '4.5'], // 64px
        '5xl': ['5rem', '5.5'], // 80px
      },
      colors: {
        acasage: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      backgroundColor: {
        dark: {
          'primary': '#1a1a1a',
          'secondary': '#2d2d2d',
          'accent': '#f97316',
        }
      },
      textColor: {
        dark: {
          'primary': '#ffffff',
          'secondary': '#9ca3af',
          'accent': '#f97316',
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};