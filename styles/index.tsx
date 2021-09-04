import text from './text';
import sizes from './sizes';
import colors from './colors';
import variants from './variants';
import gridAreas from './gridAreas';

const theme = {...text, ...sizes, ...colors, ...gridAreas}

const obj = {
  darkMode: 'class',
  theme: {
    extend: theme
  },
  variants: {
    extend: variants
  }
}

export default obj
