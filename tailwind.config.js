module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        '"Helvetica Neue"',
        '"Arial"',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        '"Meiryo"',
        "sans-serif",
      ],
    },
    extend: {},
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
