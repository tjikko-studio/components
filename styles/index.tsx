import { textOptions } from './text'
import { sizeOptions } from './sizes'
import { colorsOptions } from './colors'
import { variants } from './variants'

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

export default conf
