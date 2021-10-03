const plugin = require('tailwindcss/plugin')
const styles = require('./styles')
const applyFontConfig = require('./applyFontConfig')
const safelist = require('./tailwind.safelist')

module.exports = {
  purge: {
    content: ['./src/**/*.tsx', './styles/**/*.tsx', './index.js', './styles.js'],
    safelist
  },
  plugins: [
    require('tailwind-pseudo-elements'),
    require('@tailwindcss/forms')({strategy: 'class'}),
    plugin.withOptions(
      () => {
        return applyFontConfig
      },
      () => {
        return styles
      }
    )
  ]
}
