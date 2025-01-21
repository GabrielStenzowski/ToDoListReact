/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'transparency-slate': 'rgb(242, 242, 242, 1)',
        'default-blue': '#0069D9',
      },
    },
  },
  plugins: [],
}
