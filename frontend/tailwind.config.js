export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 55px -30px rgba(41, 29, 18, 0.28)',
      },
      colors: {
        gold: {
          50: '#fdf8f1',
          100: '#f7ead0',
          200: '#f0d7a5',
          300: '#e6bf73',
          400: '#d9a84d',
          500: '#b77d2d',
          600: '#8a5d22',
          700: '#5b3a19',
        },
      },
    },
  },
  plugins: [],
}
