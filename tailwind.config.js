/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#e8f0fe',
          100: '#c7dafc',
          200: '#95bef9',
          300: '#629cf5',
          400: '#327aef',
          500: '#0f5ad5',
          600: '#0a47aa',
          700: '#0a3f95',
          800: '#082d6b',
          900: '#051c42',
        },
        border: '#e2e8f0',
        surface: {
          DEFAULT: '#f8fafc',
          elevated: '#ffffff',
        },
        ink: {
          DEFAULT: '#0f172a',
          secondary: '#475569',
          muted: '#94a3b8',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(15, 23, 42, 0.06)',
        'medium': '0 8px 30px rgba(15, 23, 42, 0.08)',
        'strong': '0 16px 48px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
