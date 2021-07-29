const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    './stories/components/**/*.@(js|jsx|ts|tsx)'
  ],
  darkMode: "class",
  theme: {},
  variants: {},
  plugins: [
    require('./tailwind/styles/sizes'),
    require('./tailwind/styles/colors'),
    require('./tailwind/styles/fonts'),
    require('./tailwind/styles/text'),
    require('./tailwind/utils/selectors'),
  ]
}
