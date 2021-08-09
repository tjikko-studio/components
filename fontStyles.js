module.exports = ({theme, addBase, addUtilities}) => {
  const fontBase = {
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
      letterSpacing: theme('letterSpacing.wider'),
    }
  }
  const fontStyles = {
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
      letterSpacing: theme('letterSpacing.wider'),
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
      letterSpacing: theme('letterSpacing.wider'),
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
      letterSpacing: theme('letterSpacing.wider'),
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
      letterSpacing: theme('letterSpacing.wider'),
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
    },
  }
  addBase(fontBase)
  addUtilities(fontStyles, ['responsive'])
}
