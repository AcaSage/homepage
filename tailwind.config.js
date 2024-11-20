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
      spacing: {
        'sm-gap': '1rem', // Mobile: 16px
        'md-gap': '1.5rem', // Tablet: 24px
        'lg-gap': '2rem', // Desktop: 32px
      },
      fontSize: {
        'hero-title': ['3rem', '1.2'], // 48px (desktop)
        'hero-subtitle': ['1.25rem', '1.5'], // 20px
        'section-title': ['2rem', '1.4'], // 32px
        'body': ['1rem', '1.5'], // 16px
        sm: ['0.875rem', '1.5'], // 14px
        base: ['1rem', '1.6'], // 16px
        lg: ['1.125rem', '1.7'], // 18px
        xl: ['1.25rem', '1.8'], // 20px
        '2xl': ['1.5rem', '1.9'], // 24px
        '3xl': ['2rem', '2'], // 32px
        '4xl': ['2.5rem', '2.5'], // 40px
        '5xl': ['3rem', '3'], // 48px
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