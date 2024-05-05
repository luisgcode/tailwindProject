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
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSuplight: "hsl(12,88%,95%)",
        darkBlue: "hsl(226, 40%, 22%)",
        drakGrayishblue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233,12%,13%)",
        veryPaleRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)",
      },
    },
  },
  plugins: [],
};
