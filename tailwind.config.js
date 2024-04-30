module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#CC2D4a",
        secondary: "#8fa206",
        tertiary: "#61aec9",
      },
    },
  },
  plugins: [],
};
