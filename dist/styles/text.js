"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textFunctions = exports.textOptions = void 0;
var textOptions = {
  fontFamily: {
    display: ['Inter, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'],
    body: ['Inter, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif']
  },
  fontSize: {
    "xxs": ".625rem",
    "xs": ".75rem",
    "sm": ".875rem",
    "base": "1rem",
    "lg": "1.125rem",
    "xl": "1.125rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "9rem"
  },
  lineHeight: {
    "xs": "1em",
    "sm": "1.25em",
    "base": "1.5em",
    "lg": "1.33333em",
    "xl": "1.33333em",
    "2xl": "1.16667em",
    "3xl": "1.2em",
    "4xl": "1.1111em",
    "5xl": "1em",
    "6xl": "1em",
    "7xl": "1em",
    "8xl": "1em",
    "9xl": "1em"
  },
  space: {
    "xs": "0",
    "sm": "0",
    "base": "0",
    "lg": "0",
    "xl": "0.08em",
    "2xl": "0.08em",
    "3xl": "0.07em",
    "4xl": "0.07em",
    "5xl": "0.06em",
    "6xl": "0.06em",
    "7xl": "0.05em",
    "8xl": "0.05em",
    "9xl": "0.05em"
  },
  fontWeight: {
    "xs": "500",
    "sm": "400",
    "base": "400",
    "lg": "400",
    "xl": "500",
    "2xl": "600",
    "3xl": "600",
    "4xl": "600",
    "5xl": "500",
    "6xl": "500",
    "7xl": "500",
    "8xl": "400",
    "9xl": "400"
  }
};
exports.textOptions = textOptions;

var textFunctions = function textFunctions(_ref) {
  var {
    theme,
    addBase,
    addUtilities
  } = _ref;
  var fontBase = {
    'body': {
      fontFamily: theme('fontFamily.body'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.base'),
      letterSpacing: theme('space.base'),
      fontWeight: theme('fontWeight.base')
    },
    'strong': {
      fontWeight: theme('fontWeight.semibold')
    },
    'uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    }
  };
  var fontStyles = {
    /* 
      Font styles base modifiers
     */
    '.fontStyle-base': {
      fontFamily: theme('fontFamily.body'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.base'),
      letterSpacing: theme('space.base'),
      fontWeight: theme('fontWeight.base')
    },
    '.fontStyle-base.strong, .fontStyle-base strong, .strong': {
      fontWeight: theme('fontWeight.semibold')
    },
    '.fontStyle-base.uppercase, .fontStyle-base uppercase, .uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    },

    /* 
      Font styles large
     */
    '.fontStyle-lg': {
      fontFamily: theme('fontFamily.body'),
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.lg'),
      letterSpacing: theme('space.lg'),
      fontWeight: theme('fontWeight.lg')
    },
    '.fontStyle-lg.strong, .fontStyle-lg strong': {
      fontWeight: theme('fontWeight.semibold')
    },
    '.fontStyle-lg.uppercase, .fontStyle-lg uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    },

    /* 
      Font styles small
     */
    '.fontStyle-sm': {
      fontFamily: theme('fontFamily.body'),
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.sm'),
      letterSpacing: theme('space.sm'),
      fontWeight: theme('fontWeight.sm')
    },
    '.fontStyle-sm.strong, .fontStyle-sm strong': {
      fontWeight: theme('fontWeight.semibold')
    },
    '.fontStyle-sm.uppercase, .fontStyle-sm uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    },

    /* 
      Font styles xsmall
     */
    '.fontStyle-xs': {
      fontFamily: theme('fontFamily.body'),
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.xs'),
      letterSpacing: theme('space.xs'),
      fontWeight: theme('fontWeight.xs')
    },
    '.fontStyle-xs.strong, .fontStyle-xs strong': {
      fontWeight: theme('fontWeight.bold')
    },
    '.fontStyle-xs.uppercase, .fontStyle-xs uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    },

    /* 
      Font styles buttons
     */
    '.fontStyle-button-lg': {
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.4'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.medium')
    },
    '.fontStyle-button-base': {
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.4'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.medium')
    },
    '.fontStyle-button-sm': {
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.4'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.medium')
    },
    '.fontStyle-button-xs': {
      fontSize: theme('fontSize.xxs'),
      lineHeight: theme('lineHeight.4'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.semibold')
    },

    /* 
      Font styles xl to 9xl
     */
    '.fontStyle-xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.xl'),
      letterSpacing: theme('space.xl'),
      fontWeight: theme('fontWeight.xl'),
      textTransform: 'uppercase'
    },
    '.fontStyle-2xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.2xl'),
      lineHeight: theme('lineHeight.2xl'),
      letterSpacing: theme('space.2xl'),
      fontWeight: theme('fontWeight.2xl')
    },
    '.fontStyle-3xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.3xl'),
      lineHeight: theme('lineHeight.3xl'),
      letterSpacing: theme('space.3xl'),
      fontWeight: theme('fontWeight.3xl')
    },
    '.fontStyle-4xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.4xl'),
      lineHeight: theme('lineHeight.4xl'),
      letterSpacing: theme('space.4xl'),
      fontWeight: theme('fontWeight.4xl')
    },
    '.fontStyle-5xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.5xl'),
      lineHeight: theme('lineHeight.5xl'),
      letterSpacing: theme('space.5xl'),
      fontWeight: theme('fontWeight.5xl')
    },
    '.fontStyle-6xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.6xl'),
      lineHeight: theme('lineHeight.6xl'),
      letterSpacing: theme('space.6xl'),
      fontWeight: theme('fontWeight.6xl')
    },
    '.fontStyle-7xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.7xl'),
      lineHeight: theme('lineHeight.7xl'),
      letterSpacing: theme('space.7xl'),
      fontWeight: theme('fontWeight.7xl')
    },
    '.fontStyle-8xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.8xl'),
      lineHeight: theme('lineHeight.8xl'),
      letterSpacing: theme('space.8xl'),
      fontWeight: theme('fontWeight.8xl')
    },
    '.fontStyle-9xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.9xl'),
      lineHeight: theme('lineHeight.9xl'),
      letterSpacing: theme('space.9xl'),
      fontWeight: theme('fontWeight.9xl')
    }
  };
  addBase(fontBase);
  addUtilities(fontStyles, ['responsive']);
};

exports.textFunctions = textFunctions;