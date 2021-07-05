module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    './stories/components/**/*.@(js|jsx|ts|tsx)'
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'input_focus': '#25B6D0',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
      fontFamily: {
        'inter': ['inter']
      }
    }
  },
  variants: {
    extend: {

    }
  },
  plugins: []
}
