import { text } from './text'
import { sizes } from './sizes'
import { colors } from './colors'
import { variants } from './variants'

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

export default styles