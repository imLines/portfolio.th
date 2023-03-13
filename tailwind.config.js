/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('../images/background-home.webp')",
        'wwiDEV-background': "url('../images/projects/wwiDEV/wwiDEV-background.png')",
        'pyjamzz-background': "url('../images/projects/pyjamzz/BackgroundPY.png')",
        'gekalories-background': "url('../images/projects/gekalories/gekalories.png')"
      },
    },

  },
  plugins: [],
}
