/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://www.oxfordstudent.com/wp-content/uploads/2018/10/Duke_Humfreys_Library_Interior_6_Bodleian_Library_Oxford_UK_-_Diliff.jpg')"
      }
    }
  },
  plugins: []
}
