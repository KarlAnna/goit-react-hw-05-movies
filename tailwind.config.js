/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'royal-blue': '#6347f9',
      'dark-royal-blue-0.6': 'rgba(30, 21, 75, 0.6)',
      'light-royal-blue-0.6': 'rgba(177, 163, 252, 0.6)',
      'wild-sand': '#f5f5f5',
      'cloud-burst': '#1f3347',
    },
    boxShadow: {
      'btn': '0 0.5em 0.5em -0.4em #6347f9;'
    }
  },
  plugins: [],
}
