/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f0ff',
          100: '#ede5ff',
          200: '#dcc6ff',
          300: '#c9a8ff',
          400: '#b389ff',
          500: '#9D4EDD',
          600: '#8b3bce',
          700: '#7a2cb8',
          800: '#6a23a2',
          900: '#5a1a8c',
        },
        accent: {
          pink: '#FF006E',
          cyan: '#00D9FF',
          purple: '#9D4EDD',
        },
        dark: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c0c0c0',
          400: '#808080',
          500: '#404040',
          600: '#303030',
          700: '#202020',
          800: '#101010',
          900: '#000000',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #9D4EDD 0%, #FF006E 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #00D9FF 0%, #9D4EDD 100%)',
        'gradient-neon': 'linear-gradient(135deg, #FF006E 0%, #9D4EDD 50%, #00D9FF 100%)',
        'neon-glow': 'radial-gradient(circle, rgba(157, 78, 221, 0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.5), inset 0 0 20px rgba(157, 78, 221, 0.1)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5), inset 0 0 20px rgba(255, 0, 110, 0.1)',
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.1)',
        'neon-glow': '0 0 40px rgba(157, 78, 221, 0.4), 0 0 80px rgba(255, 0, 110, 0.2)',
      },
      borderColor: {
        'neon-purple': 'rgba(157, 78, 221, 0.5)',
        'neon-pink': 'rgba(255, 0, 110, 0.5)',
        'neon-cyan': 'rgba(0, 217, 255, 0.5)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(157, 78, 221, 0.5), inset 0 0 20px rgba(157, 78, 221, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(157, 78, 221, 0.8), inset 0 0 30px rgba(157, 78, 221, 0.2)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideInUp: 'slideInUp 0.3s ease-in-out',
        slideInRight: 'slideInRight 0.3s ease-in-out',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
}
