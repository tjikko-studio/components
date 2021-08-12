const plugin = require('tailwindcss/plugin')
const styles = require('./styles')
const applyFontConfig = require('./applyFontConfig')

/** This guy prevents `useBreakpoint` breaking, no idea why or how */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    plugin.withOptions(
      function(){ return applyFontConfig },
      function(){ return styles })
  ],
}
