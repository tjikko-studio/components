module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    './stories/components/**/*.@(js|jsx|ts|tsx)'
  ],
  darkMode: false,
  theme: {
    extend: {
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
