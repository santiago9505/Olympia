module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    placeholderColor: theme => theme('colors'),

     placeholderColor: {

      'principal_gray': '#5E605B',

     },

    borderColor: theme => ({

      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),

       'principal_blue': '#264156',
     }),

    textColor: theme => theme('colors'),

    textColor: {

      'white': '#F9FBF9',
      'black': '#060900',
      'principal_gray': '#5E605B',

    },
    backgroundColor: theme => ({

      ...theme('colors'),

      'background_principal': '#065F46',
      'background_gray': '#8D8A88',
      'principal_blue': '#264156',
      'principal_brown': '#210F04',
      'principal_gray': '#5E605B',
      'principal_red': '#9B0F0F',
      'principal_green': '#6C9B19',
      'white': '#F9FBF9',
      'black': '#060900',
     }),
    boxShadow: {
      custom: "0 -3px 6px #00000059;"
    },
    gridTemplateRows: {
      '4-custom': 'repeat(4, auto)',
      '3-custom': 'repeat(3, auto)',
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease",
    },
    transitionProperty: {
      'custom-all': 'all',
    },
    transitionTimingFunction: {
      'custom-ease': 'ease'
    },
    transitionDuration: {
      'custom-1000': '1000ms',
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
