/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Fredoka', 'Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'Fredoka', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        game: {
          cream: '#e9e7eb',
          blush: '#ead6e6',
          pink: '#e5b8cc',
          lilac: '#ddd0f0',
          purple: '#c8b8e4',
          sky: '#ccdced',
          blue: '#b3d0ea',
          mint: '#d9ffe8',
          ink: '#2a2240',
          night: '#17122b',
          panel: '#f1eff3',
        },
        primary: {
          light: '#f5f7fa',
          DEFAULT: '#e0e7ff',
          dark: '#312e81',
        },
        accent: {
          blue: '#a7c7e7',
          pink: '#f7c6ce',
          purple: '#d1c4e9',
        },
        dark: '#18181b',
        light: '#f9fafb',
        text: {
          DEFAULT: '#22223b',
          light: '#f9fafb',
        },
      },
      boxShadow: {
        game: '0 8px 0 rgba(42, 34, 64, 0.38), 0 14px 30px rgba(42, 34, 64, 0.12)',
        'game-soft': '0 5px 0 rgba(42, 34, 64, 0.24), 0 10px 22px rgba(42, 34, 64, 0.1)',
        sticker: '0 8px 0 rgba(200, 184, 228, 0.35), 0 0 0 3px rgba(255, 255, 255, 0.12)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-6px) rotate(2deg)' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        twinkle: 'twinkle 3.5s ease-in-out infinite',
        bob: 'bob 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
