const plugin = require('tailwindcss/plugin')
const styles = require('./styles')
const applyFontConfig = require('./applyFontConfig')

module.exports = {
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
    plugin.withOptions(
      function(){ return applyFontConfig },
      function(){ return styles }
    )
  ]
}
