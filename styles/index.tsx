import colors from './colors'
import sizes from './sizes'
import text from './text'
import variants from './variants'

const theme = {
  ...text,
  ...sizes,
  ...colors
}

export default {
  darkMode: 'class',
  theme: {
    extend: theme
  },
  variants: {
    extend: variants
  }
}
