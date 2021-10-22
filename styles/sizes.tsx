const {screens} = require('tailwindcss/defaultTheme')

const defaultHeightValues = {
  0: '0px',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
  auto: 'auto',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  full: '100%',
  screen: '100vh'
}

const newHeightValues = {
  '1/3vh': '33.333vh',
  '2/3vh': '66.666vh',
  '1/4vh': '25vh',
  '3/4vh': '75vh',
  '1/5vh': '20vh',
  '2/5vh': '40vh',
  '3/5vh': '60vh',
  '4/5vh': '80vh',
  '1/2vh': '50vh',
  '5vh': '5vh',
  '10vh': '10vh',
  '15vh': '15vh',
  '20vh': '20vh',
  '25vh': '25vh',
  '30vh': '30vh',
  '35vh': '35vh',
  '40vh': '40vh',
  '45vh': '45vh',
  '50vh': '50vh',
  '55vh': '55vh',
  '60vh': '60vh',
  '65vh': '65vh',
  '70vh': '70vh',
  '75vh': '75vh',
  '80vh': '80vh',
  '85vh': '85vh',
  '90vh': '90vh',
  '95vh': '95vh',
  '100vh': '100vh',
  '1/3vw': '33.333vw',
  '2/3vw': '66.666vw',
  '1/4vw': '25vw',
  '3/4vw': '75vw',
  '1/5vw': '20vw',
  '2/5vw': '40vw',
  '3/5vw': '60vw',
  '4/5vw': '80vw',
  '1/2vw': '50vw',
  '100vw': '100vw'
}
const heightValues = {
  ...defaultHeightValues,
  ...newHeightValues
}
const widthValues = {
  'screen-xxs': '375px',
  'screen-xs': '414px',
  'screen-sm': '640px',
  'screen-md': '768px',
  'screen-lg': '1024px',
  'screen-xl': '1280px',
  'screen-2xl': '1536px'
}

export interface MediaQueryProps {
  [key: string]: string
}

/* const screens: MediaQueryProps = {
  xxs: '375px',
  xs: '414px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

/**
 * These screenSizes have string values,
 * which result in `min-width: value` in tailwind.
 * This function just adds a `!`-prefixed version for `max-width`.
 * So things like `!xxs`, `!lg`, `!2xl`, etc.
 *
 */
/*
 * const screens = Object.keys(screenSizes).reduce<Record<string, any>>(
 *   (all, key) => {
 *     const screenSize = screenSizes[key]
 *     return {
 *       ...all,
 *       [key]: screenSize}
 *       [`\!${key}`]: {max: screenSize}
 *     }
 *   },
 *   {}
 * )
 */

export default {
  height: heightValues,
  minHeight: heightValues,
  maxHeight: heightValues,
  width: widthValues,
  minWidth: widthValues,
  maxWidth: widthValues,
}

export const breakpoints: MediaQueryProps = {
  xxs: '375px',
  xs: '414px',
  ...screens,
  '2xl': '1536px'
}
