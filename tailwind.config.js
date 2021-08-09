const plugin = require('tailwindcss/plugin')
const styles = require('./styles')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  plugins: [
    plugin.withOptions(() => {},() => {
      return styles
    }),
    require('@tailwindcss/forms'),
    plugin(require('./fontStyles'))
  ]
}
