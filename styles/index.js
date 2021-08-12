const textOptions = require('./text')
const sizeOptions = require('./sizes')
const colorsOptions = require('./colors')
const variants = require('./variants')

const theme = {...textOptions, ...sizeOptions, ...colorsOptions}

const conf = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: [
      './**/*.(t|j)sx?',
      '.css'
    ],
    options: {
      rejected: true,
      printRejected: true
    }
  },
  theme: {
    extend: theme
  },
  variants: {
    extend: variants
  }
}

module.exports = exports = conf
