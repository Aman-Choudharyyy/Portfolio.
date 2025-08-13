/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // Light Mode - Rosewater & Champagne Gold Palette
        light: {
          bg: '#FFF5F5',           // Rosewater
          surface: '#FFF8F8',      // Soft Petal
          card: '#FFF8F8',         // Soft Petal
          text: '#4B3F40',         // Deep Rosewood
          'text-secondary': '#9E8C89', // Muted Cocoa
          'text-muted': '#9E8C89', // Muted Cocoa
          primary: '#BC8C7A',      // Dusty Blush
          'primary-hover': '#A67B68', // Darker Dusty Blush
          accent: '#DABFAF',       // Champagne Gold
          border: '#E8DCD5',       // Blushed Linen
          'border-light': '#E8DCD5', // Blushed Linen
        },
        // Dark Mode - Lavender Twilight Palette
        dark: {
          bg: '#1F1B24',           // Deep Twilight
          surface: '#2B2735',      // Lavender Shadow
          card: '#2B2735',         // Lavender Shadow
          text: '#EDE6F4',         // Lavender Mist
          'text-secondary': '#A29BB0', // Plum Grey
          'text-muted': '#A29BB0', // Plum Grey
          primary: '#A66CFF',      // Violet Glow
          'primary-hover': '#B87FFF', // Brighter Violet Glow
          accent: '#B18BD8',       // Dusty Lavender
          border: '#3C3947',       // Soft Graphite
          'border-light': '#3C3947', // Soft Graphite
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 165, 116, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};