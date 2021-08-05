import plugin from 'tailwindcss/plugin'
import { textOptions, textFunctions } from './text';
import { sizeOptions } from './sizes';
import { colorsOptions } from './colors';
import { variants } from './variants';

module.exports = plugin.withOptions(
  function (options = {}){
    return function (args) {
      textFunctions(args);
    }
  },
  function (options = {}) {
    const theme = {...textOptions, ...sizeOptions, ...colorsOptions};
    return {
      darkMode: 'class',
      purge: {
        content: [
          './stories/components/**/*.@(js|jsx|ts|tsx)',
        ],
        options: {
          rejected: true,
          printRejected: true,
        },
      },
      theme: {
        extend: theme
      },
      variants: {
        extend: variants
      }
    } 
  }
)
