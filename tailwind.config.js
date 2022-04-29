module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    /* Custom Breakpoints */
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      /* Custom Colors */
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        main: "#4031D9",
        secondary: "#8A37DC",
      },
    },
  },
  plugins: [],
};
