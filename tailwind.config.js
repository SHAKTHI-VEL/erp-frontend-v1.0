/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
"./src/LoginForm/*.jsx" ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'mainBg': '#021639',
      'offWhite': '#FAF9F6',
      'lightMain':'#4e5c74',
      'buttoncta':'#54B862',
      'lightBg': 'rgb(51 65 85)',
      'darkBg': 'rgb(30 41 59)',
      'iconColor': "rgb(180 83 9)",
      'green': "rgb(132 204 22)",
      "red": "rgb(244 63 94)"
    },
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'playfair':['Playfair Display SC', 'serif']
      },
    },
  },
  plugins: [],
}

