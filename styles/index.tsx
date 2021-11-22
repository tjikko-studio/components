import animations from './animations'
import colors from './colors'
import sizes, {breakpoints} from './sizes'
import text from './text'
import variants from './variants'

const theme = {
  ...animations,
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
