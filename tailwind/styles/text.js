const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addBase, addUtilities, theme }) {
  addBase({
    'body': { fontFamily: theme('fontFamily.Secondary') }
  });

  addUtilities(
    {
      '.fontStyle-body': {
        fontSize: theme('fontSize.base'),
        lineHeight: theme('lineHeight.6'),
      },
      '.fontStyle-body.strong, .fontStyle-body strong': {
        fontWeight: theme("fontWeight.semibold")
      },
      '.fontStyle-body.uppercase, .fontStyle-body uppercase': {
        letterSpacing: theme('letterSpacing.wider'),
      },
      '.fontStyle-body.button': {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('lineHeight.4'),
        textTransform: 'uppercase',
        letterSpacing: theme('letterSpacing.wider'),
        fontWeight: theme('fontWeight.semibold')
      },
      '.fontStyle-lg': {
        fontSize: theme('fontSize.lg'),
        lineHeight: theme('lineHeight.7'),
      },
      '.fontStyle-lg.strong, .fontStyle-lg strong': {
        fontWeight: theme("fontWeight.semibold")
      },
      '.fontStyle-lg.uppercase, .fontStyle-lg uppercase': {
        letterSpacing: theme('letterSpacing.wider'),
      },
      '.fontStyle-lg.button': {
        fontSize: theme('fontSize.base'),
        lineHeight: theme('lineHeight.4'),
        textTransform: 'uppercase',
        letterSpacing: theme('letterSpacing.wider'),
        fontWeight: theme('fontWeight.semibold')
      },
      '.fontStyle-sm': {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('lineHeight.5'),
      },
      '.fontStyle-sm.strong, .fontStyle-sm strong': {
        fontWeight: theme("fontWeight.semibold")
      },
      '.fontStyle-sm.uppercase, .fontStyle-sm uppercase': {
        letterSpacing: theme('letterSpacing.wider'),
      },
      '.fontStyle-sm.button': {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('lineHeight.4'),
        textTransform: 'uppercase',
        letterSpacing: theme('letterSpacing.wider'),
        fontWeight: theme('fontWeight.semibold')
      },
      '.fontStyle-xs': {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('lineHeight.4'),
        fontWeight: theme("fontWeight.medium")
      },
      '.fontStyle-xs.strong, .fontStyle-xs strong': {
        fontWeight: theme("fontWeight.bold")
      },
      '.fontStyle-xs.uppercase, .fontStyle-xs uppercase': {
        letterSpacing: theme('letterSpacing.wider'),
      },
      '.fontStyle-xs.button': {
        fontSize: theme('fontSize.xxs'),
        lineHeight: theme('lineHeight.4'),
        textTransform: 'uppercase',
        letterSpacing: theme('letterSpacing.wider'),
        fontWeight: theme('fontWeight.bold')
      },
      '.fontStyle-xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.xl'),
        lineHeight: theme('lineHeight.xl'),
        letterSpacing: theme('space.xl'),
        fontWeight: theme('fontWeight.xl'),
        textTransform: "uppercase"
      },
      '.fontStyle-2xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.2xl'),
        lineHeight: theme('lineHeight.2xl'),
        letterSpacing: theme('space.2xl'),
        fontWeight: theme('fontWeight.2xl')
      },
      '.fontStyle-3xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.3xl'),
        lineHeight: theme('lineHeight.3xl'),
        letterSpacing: theme('space.3xl'),
        fontWeight: theme('fontWeight.3xl')
      },
      '.fontStyle-4xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.4xl'),
        lineHeight: theme('lineHeight.4xl'),
        letterSpacing: theme('space.4xl'),
        fontWeight: theme('fontWeight.4xl')
      },
      '.fontStyle-5xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.5xl'),
        lineHeight: theme('lineHeight.5xl'),
        letterSpacing: theme('space.5xl'),
        fontWeight: theme('fontWeight.5xl')
      },
      '.fontStyle-6xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.6xl'),
        lineHeight: theme('lineHeight.6xl'),
        letterSpacing: theme('space.6xl'),
        fontWeight: theme('fontWeight.6xl')
      },
      '.fontStyle-7xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.7xl'),
        lineHeight: theme('lineHeight.7xl'),
        letterSpacing: theme('space.7xl'),
        fontWeight: theme('fontWeight.7xl')
      },
      '.fontStyle-8xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.8xl'),
        lineHeight: theme('lineHeight.8xl'),
        letterSpacing: theme('space.8xl'),
        fontWeight: theme('fontWeight.8xl')
      },
      '.fontStyle-9xl': {
        fontFamily: theme('fontFamily.Primary'),
        fontSize: theme('fontSize.9xl'),
        lineHeight: theme('lineHeight.9xl'),
        letterSpacing: theme('space.9xl'),
        fontWeight: theme('fontWeight.9xl')
      },
    },
    ['responsive']
  );  
}, {
  theme: {
    extend: {
      fontSize: {
        "xxs":  ".625rem",
        "xl":  "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem"
      },
      lineHeight:{
        "xl":  "1.33333em",
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
        "xl":  "0.09em",
        "2xl": "0.09em",
        "3xl": "0.08em",
        "4xl": "0.08em",
        "5xl": "0.06em",
        "6xl": "0.06em",
        "7xl": "0.05em",
        "8xl": "0.05em",
        "9xl": "0.05em"
      },
      fontWeight: {
        "xl":  "500",
        "2xl": "600",
        "3xl": "600",
        "4xl": "600",
        "5xl": "500",
        "6xl": "500",
        "7xl": "500",
        "8xl": "400",
        "9xl": "400"
      },  
      font: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    }
  }
})