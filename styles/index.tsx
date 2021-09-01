import text from './text';
import sizes from './sizes';
import colors from './colors';
import variants from './variants';

const theme = {...text, ...sizes, ...colors}

export default {
  darkMode: 'class',
  theme: {
    extend: theme
  },
  variants: {
    extend: variants
  }
}
