const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addVariant, e }) {
  addVariant('before', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`before${separator}${className}`)}::before`;
    });
  });
  addVariant('after', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`after${separator}${className}`)}::after`;
    });
  });
}, {
  variants: {
    extend: {
      opacity: ['disabled'],
      visibility: ['disabled'],
      borderColor: ['disabled'],
      textColor: ['disabled'],
      backgroundColor: ['disabled']
    }
  }
})