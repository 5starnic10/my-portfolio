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
        sans: ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#f5f7fa',
          DEFAULT: '#e0e7ff', // pastel blue
          dark: '#312e81',
        },
        accent: {
          blue: '#a7c7e7', // pastel blue
          pink: '#f7c6ce', // pastel pink
          purple: '#d1c4e9', // pastel purple
        },
        dark: '#18181b',
        light: '#f9fafb',
        text: {
          DEFAULT: '#22223b',
          light: '#f9fafb',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 