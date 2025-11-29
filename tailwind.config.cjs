module.exports = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        ghanaRed: '#C8102E',
        ghanaYellow: '#FCD116',
        ghanaGreen: '#006B3F',
        ghanaBlack: '#000000',
      }
    }
  },
  plugins: []
};
