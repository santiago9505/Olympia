module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      custom: '0 -3px 6px #00000059;'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
