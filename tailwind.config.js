// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#141414',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a3a3a3',
        },
        accent: {
          DEFAULT: '#e63946', // Special Red
          soft: '#ffb703', // Gold yellow
        },
      },
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        serif: ['Cardo', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
