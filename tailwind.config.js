/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        'Barlow-Condensed': ['Barlow Condensed', 'sans-serif'],
        Bellefair: ['Bellefair', 'sans-serif'],
      },
      backgroundImage: {
        'home-patternDesktop':
          "url('./src/assets/home/background-home-desktop.jpg')",
        'home-patternMobile':
          "url('./src/assets/home/background-home-mobile.jpg')",
        'home-patternTablet':
          "url('./src/assets/home/background-home-tablet.jpg')",
        'destination-patternDesktop':
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        'destination-patternMobile':
          "url('./src/assets/destination/background-destination-mobile.jpg')",
        'destination-patternTablet':
          "url('./src/assets/destination/background-destination-tablet.jpg')",
        'crew-patternDesktop':
          "url('./src/assets/crew/background-crew-desktop.jpg')",
        'crew-patternMobile':
          "url('./src/assets/crew/background-crew-mobile.jpg')",
        'crew-patternTablet':
          "url('./src/assets/crew/background-crew-tablet.jpg')",
        'technology-patternDesktop':
          "url('./src/assets/technology/background-technology-desktop.jpg')",
        'technology-patternMobile':
          "url('./src/assets/technology/background-technology-mobile.jpg')",
        'technology-patternTablet':
          "url('./src/assets/technology/background-technology-tablet.jpg')",
      },
      screens: {
        '2/5xl': '1870px',
      },
      center: {
      }
    },
  },
  plugins: [],
};
