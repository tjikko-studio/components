import colors from './colors'
import sizes, {breakpoints} from './sizes'
import text from './text'
import transitions from './transitions'
import variants from './variants'

const theme = {
  ...transitions,
  ...text,
  ...colors,
  ...sizes
}

export default {
  darkMode: 'class',
  theme: {
    extend: theme,
    screens: breakpoints
  },
  variants: {
    extend: variants
  }
}
