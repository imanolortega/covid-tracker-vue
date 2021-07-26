module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      backgroundImage: () => ({
        "covid-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%);",
      }),
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
