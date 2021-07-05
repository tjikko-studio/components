module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    './stories/components/**/*.@(js|jsx|ts|tsx)'
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'inter': ['inter']
    },
    extend: {
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'input_focus': '#63AFC0',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      })
    },
    boxShadow: {
      'input_focus': '0px 0px 10px #75B6C5'
    }
  },
  variants: {
    extend: {

    }
  },
  plugins: []
}
