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
      textColor: theme => theme('colors'),
      textColor: {
        'button': {
          'primary_dark': '#022631',
          'hover': '#023846',
          'default': '#25B6D0',
          'dark': {
            'hover': '#BDEFF9',
            'default': '#7BE1EF',
          }
        }
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'input_focus': '#63AFC0',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'button': {
          'hover': '#0B6A7D',
          'default': '#25B6D0',
          'dark': {
            'hover': '#9EE9F5',
            'default': '#7BE1EF',
          }
        }
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
