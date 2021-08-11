const plugin = require('tailwindcss/plugin')
const styles = require('./styles')
const fontStyles = require('./fontStyles')

/** This guy prevents `useBreakpoint` breaking, no idea why or how */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    plugin.withOptions(
      function(){ return fontStyles },
      function(){ return styles })
  ],
}