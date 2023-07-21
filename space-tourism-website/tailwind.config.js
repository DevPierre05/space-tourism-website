/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // xs: '300px',
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    backgroundImage: {
      "home-desktop": "url('./public/home/background-home-desktop.jpg')",
      "home-tablet": "url('./public/home/background-home-tablet.jpg')",
      "home-mobile": "url('./public/home/background-home-mobile.jpg')",
      "destination-desktop":
        "url('./public/destination/background-destination-desktop.jpg')",
      "destination-tablet":
        "url('./public/destination/background-destination-tablet.jpg')",
      "destination-mobile":
        "url('./public/destination/background-destination-mobile.jpg')",
      "crew-desktop": "url('./public/crew/background-crew-desktop.jpg')",
      "crew-tablet": "url('./public/crew/background-crew-tablet.jpg')",
      "crew-mobile": "url('./public/crew/background-crew-mobile.jpg')",
      "tech-desktop":
        "url('./public/technology/background-technology-desktop.jpg')",
      "tech-tablet":
        "url('./public/technology/background-technology-tablet.jpg')",
      "tech-mobile":
        "url('./public/technology/background-technology-mobile.jpg')",
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

