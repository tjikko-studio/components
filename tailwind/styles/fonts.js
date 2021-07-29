const plugin = require('tailwindcss/plugin')

module.exports = plugin(function() {}, {
  theme: {
    extend: {
      fontFamily: {
        Primary: ['Borda, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'],
        Secondary: ['Inter, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif']
      }
    }
  }
})