/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const plugin = require('tailwindcss/plugin')
const styles = require('./styles')
const applyFontConfig = require('./applyFontConfig')

module.exports = {
  purge: {
    content: [
      './src/**/*.tsx',
      './styles/**/*.tsx',
      './index.js',
      './styles.js'
    ]
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
