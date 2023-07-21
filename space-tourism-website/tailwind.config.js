/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',    
    },
    backgroundImage: {
      'home-desktop': "url('./src/assets/home/background-home-desktop.jpg')",
      'home-tablet': "url('./src/assets/home/background-home-tablet.jpg')",
      'home-mobile': "url('./src/assets/home/background-home-mobile.jpg')",
      'destination-desktop': "url('./src/assets/destination/background-destination-desktop.jpg')",
      'destination-tablet': "url('./src/assets/destination/background-destination-tablet.jpg')",
      'destination-mobile': "url('./src/assets/destination/background-destination-mobile.jpg')",
      'crew-desktop': "url('./src/assets/crew/background-crew-desktop.jpg')",
      'crew-tablet': "url('./src/assets/crew/background-crew-tablet.jpg')",
      'crew-mobile': "url('./src/assets/crew/background-crew-mobile.jpg')",
      'tech-desktop': "url('./src/assets/technology/background-technology-desktop.jpg')",
      'tech-tablet': "url('./src/assets/technology/background-technology-tablet.jpg')",
      'tech-mobile': "url('./src/assets/technology/background-technology-mobile.jpg')",
    },

    extend: {
      colors: {
        grayLight: "#979797",
      },
      spacing: {
        100: "26rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};

