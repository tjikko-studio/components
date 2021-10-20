
import colors from './colors'
import sizes from './sizes'
import text from './text'
import variants from './variants'

const theme = {
  ...text,
  ...colors
}

export default {
  darkMode: 'class',
  theme: {
    extend: theme,
    screens: sizes
  },
  variants: {
    extend: variants
  }
}
