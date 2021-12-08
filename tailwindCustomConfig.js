/* eslint-env node */
exports = function exports({theme, addBase, addUtilities}) {
  const fontStyles = {
    /*
     *Font styles base modifiers
     */
    '.fontStyle-base': {
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.base'),
      letterSpacing: theme('letterSpacing.base'),
      fontWeight: theme('fontWeight.base')
    },
    '.dark, .dark .fontStyle-base, .dark.fontStyle-base': {
      fontWeight: theme('fontWeight.base-dark')
    },
    '.fontStyle-base.strong, .fontStyle-base strong, .strong': {
      fontWeight: theme('fontWeight.medium')
    },
    '.dark .fontStyle-base.strong, .dark.fontStyle-base.strong': {
      fontWeight: theme('fontWeight.medium-dark')
    },
    '.fontStyle-base.uppercase, .fontStyle-base uppercase, .uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    },

    /*
     *Font styles large
     */
    '.fontStyle-lg': {
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.lg'),
      letterSpacing: theme('letterSpacing.lg'),
      fontWeight: theme('fontWeight.lg')
    },
    '.dark .fontStyle-lg, .dark.fontStyle-lg': {
      fontWeight: theme('fontWeight.lg-dark')
    },
    '.fontStyle-lg.strong, .fontStyle-lg strong': {
      fontWeight: theme('fontWeight.medium')
    },
    '.dark .fontStyle-lg.strong, .dark.fontStyle-lg.strong': {
      fontWeight: theme('fontWeight.medium-dark')
    },
    '.fontStyle-lg.uppercase, .fontStyle-lg uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    },

    /*
     *Font styles small
     */
    '.fontStyle-sm': {
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.sm'),
      letterSpacing: theme('letterSpacing.sm'),
      fontWeight: theme('fontWeight.sm')
    },
    '.dark .fontStyle-sm, .dark.fontStyle-sm': {
      fontWeight: theme('fontWeight.sm-dark')
    },
    '.fontStyle-sm.strong, .fontStyle-sm strong': {
      fontWeight: theme('fontWeight.medium')
    },
    '.dark .fontStyle-sm.strong, .dark.fontStyle-sm.strong': {
      fontWeight: theme('fontWeight.medium-dark')
    },
    '.fontStyle-sm.uppercase, .fontStyle-sm uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    },

    /*
     *Font styles xsmall
     */
    '.fontStyle-xs': {
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.xs'),
      letterSpacing: theme('letterSpacing.xs'),
      fontWeight: theme('fontWeight.xs')
    },
    '.dark .fontStyle-xs, .dark.fontStyle-xs': {
      fontWeight: theme('fontWeight.xs-dark')
    },
    '.fontStyle-xs.strong, .fontStyle-xs strong': {
      fontWeight: theme('fontWeight.semibold')
    },
    '.dark .fontStyle-xs.strong, .dark.fontStyle-xs.strong': {
      fontWeight: theme('fontWeight.semibold-dark')
    },
    '.fontStyle-xs.uppercase, .fontStyle-xs uppercase': {
      letterSpacing: theme('letterSpacing.wider')
    },

    /*
     *Font styles buttons
     */
    '.fontStyle-button-lg': {
      fontSize: theme('fontSize.base'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.medium')
    },

    '.fontStyle-button-base': {
      fontSize: theme('fontSize.sm'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.medium')
    },
    '.fontStyle-button-sm': {
      fontSize: theme('fontSize.xs'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.medium')
    },

    '.fontStyle-button-xs': {
      fontSize: theme('fontSize.xxs'),
      textTransform: 'uppercase',
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.semibold')
    },

    /*
     *Font styles xl to 9xl
     */
    '.fontStyle-xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.xl'),
      letterSpacing: theme('letterSpacing.widest'),
      fontWeight: theme('fontWeight.xl'),
      textTransform: 'uppercase'
    },
    '.fontStyle-2xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.2xl'),
      lineHeight: theme('lineHeight.2xl'),
      letterSpacing: theme('letterSpacing.widest'),
      fontWeight: theme('fontWeight.2xl')
    },
    '.fontStyle-3xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.3xl'),
      lineHeight: theme('lineHeight.3xl'),
      letterSpacing: theme('letterSpacing.widest'),
      fontWeight: theme('fontWeight.3xl')
    },
    '.fontStyle-4xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.4xl'),
      lineHeight: theme('lineHeight.4xl'),
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.4xl')
    },
    '.fontStyle-5xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.5xl'),
      lineHeight: theme('lineHeight.5xl'),
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.5xl')
    },
    '.fontStyle-6xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.6xl'),
      lineHeight: theme('lineHeight.6xl'),
      letterSpacing: theme('letterSpacing.wider'),
      fontWeight: theme('fontWeight.6xl')
    },
    '.fontStyle-7xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.7xl'),
      lineHeight: theme('lineHeight.7xl'),
      letterSpacing: theme('letterSpacing.wide'),
      fontWeight: theme('fontWeight.7xl')
    },
    '.fontStyle-8xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.8xl'),
      lineHeight: theme('lineHeight.8xl'),
      letterSpacing: theme('letterSpacing.wide'),
      fontWeight: theme('fontWeight.8xl')
    },
    '.fontStyle-9xl': {
      fontFamily: theme('fontFamily.display'),
      fontSize: theme('fontSize.9xl'),
      lineHeight: theme('lineHeight.9xl'),
      letterSpacing: theme('letterSpacing.wide'),
      fontWeight: theme('fontWeight.9xl')
    },

    /*
     * Text Shadow
     */
    '.text-shadow-default': {
      'text-shadow': '0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)'
    },
    '.text-shadow-sm': {
      'text-shadow': '1px 1px 3px rgb(36 37 47 / 25%)'
    },
    '.text-shadow-md': {
      'text-shadow': '0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%)'
    },
    '.text-shadow-lg': {
      'text-shadow': '3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)'
    },
    '.text-shadow-xl': {
      'text-shadow': '1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%)'
    },
    '.text-shadow-none': {
      'text-shadow': 'none'
    }
  }

  const fontBase = {
    /*
     * Header and Body formatting
     */
    h1: fontStyles['.fontStyle-7xl'],
    h2: fontStyles['.fontStyle-5xl'],
    h3: fontStyles['.fontStyle-4xl'],
    h4: fontStyles['.fontStyle-3xl'],
    h5: fontStyles['.fontStyle-2xl'],
    h6: fontStyles['.fontStyle-xl'],
    body: fontStyles['.fontStyle-base'],
    strong: {fontWeight: theme('fontWeight.semibold')},
    uppercase: {letterSpacing: theme('letterSpacing.wider')},

    /*
     * Paragraph and lists formatting
     */
    ':where(.ProseMirror, .k-list-field-preview, .k-block.k-block-type-Section, .article) p:nth-child(n+2)': {
      marginTop: theme('spacing.2'),
      marginBottom: theme('spacing.2')
    },
    ':where(.ProseMirror, .k-list-field-preview, .k-block.k-block-type-Section, .article) :is(ol, ul)': {
      marginTop: theme('spacing.4'),
      marginBottom: theme('spacing.4')
    },
    ':where(.ProseMirror, .k-list-field-preview, .k-block.k-block-type-Section, .article) ul li': {
      listStyleType: 'disc'
    },
    ':where(.ProseMirror, .k-list-field-preview, .k-block.k-block-type-Section, .article) ol li': {
      listStyleType: 'decimal'
    },
    ':where(.ProseMirror, .k-list-field-preview, .k-block.k-block-type-Section, .article) li': {
      listPosition: 'outside',
      marginTop: theme('spacing["0.5"]'),
      marginBottom: theme('spacing["0.5"]')
    },
    ':where(.ProseMirror, .k-list-field-preview, .k-block.k-block-type-Section, .article) hr': {
      marginTop: theme('spacing.8'),
      marginBottom: theme('spacing.8')
    },
    'nav :is(ol, ul, ol li, ul li)': {
      listStyle: 'none',
      marginTop: 'unset',
      marginBottom: 'unset'
    }
  }

  const ratios = {
    '.ratio-none': {
      'aspect-ratio': 'unset'
    },
    '.ratio-1\\/1': {
      'aspect-ratio': '1 / 1'
    },
    '.ratio-3\\/2': {
      'aspect-ratio': '3 / 2'
    },
    '.ratio-4\\/3': {
      'aspect-ratio': '4 / 3'
    },
    '.ratio-16\\/9': {
      'aspect-ratio': '16 / 9'
    },
    '.ratio-golden': {
      'aspect-ratio': '1.618 / 1'
    }
  }

  addBase(fontBase)
  addUtilities(fontStyles, ['responsive'])
  addUtilities(ratios, ['responsive'])
}
module.exports = exports
