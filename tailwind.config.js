/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('../images/background-home.png')",
        'wwiDEV-background': "url('../images/projects/wwiDEV/wwiDEV-background.png')"
      },
    },

  },
  plugins: [],
}
