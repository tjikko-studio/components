const plugin = require('tailwindcss/plugin')
const styles = require('./styles')

/** This guy prevents `useBreakpoint` breaking, no idea why or how */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const config = {
  plugins: [
    require('@tailwindcss/forms'),
    plugin(require('./fontStyles')),
    plugin.withOptions(
      function () {},
      function () {
        return styles
      }
    )
  ]
}

module.exports = config
