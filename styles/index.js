const text = require('./text');
const sizes = require('./sizes');
const colors = require('./colors');
const variants = require('./variants');

const theme = {...text, ...sizes, ...colors}

const styles = {
  darkMode: 'class',
  purge: [
    './stories/components/**/*.@(js|jsx|ts|tsx)'
  ],
  theme: {
    extend: theme
  },
  variants: {
    extend: variants
  }
}

module.exports = styles;