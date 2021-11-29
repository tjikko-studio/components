/* eslint-env node */
exports = function exports({addUtilities}) {
  const ratios = {
    '.ratio-none': {
      'aspect-ratio': 'unset'
    },
    '.ratio-1/1': {
      'aspect-ratio': '1 / 1'
    },
    '.ratio-16/9': {
      'aspect-ratio': '16 / 9'
    },
    '.ratio-golden': {
      'aspect-ratio': '1.618 / 1'
    }
  }

  addUtilities(ratios, ['responsive'])
}
module.exports = exports
