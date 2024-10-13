module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(16, 52, 166)', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
