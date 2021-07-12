const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    // This is not present inside the default configuration
    // but it's good to build your production application
    // Read more about this here: https://tailwindcss.com/docs/installation#building-your-css
    './stories/components/**/*.@(js|jsx|ts|tsx)'
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'inter': ['inter'],
      'Borda': ['Borda']
    },
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
        "xl":  "1.5em",
        "2xl": "1.75em",
        "3xl": "2.25em",
        "4xl": "2.5em",
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
      colors: {
        gray: {
          50: '#fafbfb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#313b4a',
          800: '#222735',
          900: '#171a22',
        },
        brand: {
          50: '#F3FCFE',
          100: '#E4F7FC',
          200: '#BDF1F9',
          300: '#9EE9F5',
          400: '#6ad8e9',
          500: '#46D2E7',
          600: '#1196AE',
          700: '#0B6A7D',
          800: '#023846',
          900: '#022631',
        },
        red: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        }
      },
    },
    font: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    }
  },
  variants: {
    extend: {

    }
  },
  plugins: [
    function({ addBase, config }) {
      addBase({
        'body': { fontFamily: config('theme.fontFamily.inter') },
        'fontStyle-xl': {
          fontSize: config('theme.fontSize.9xl'),
          lineHeight: config('theme.lineHeight.9xl'),
          space: config('theme.space.9xl'),
          fontWeight: config('theme.fontWeight.9xl')
        }
      })
    },
    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(function({ addUtilities, theme }) {
      /*
        Fonts Styles shorthands
       */
      const fontUtilities = {
        '.fontStyle-xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.xl'),
          letterSpacing: theme('space.xl'),
          fontWeight: theme('fontWeight.xl'),
          textTransform: "uppercase"
        },
        '.fontStyle-2xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.2xl'),
          letterSpacing: theme('space.2xl'),
          fontWeight: theme('fontWeight.2xl')
        },
        '.fontStyle-3xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.3xl'),
          letterSpacing: theme('space.3xl'),
          fontWeight: theme('fontWeight.3xl')
        },
        '.fontStyle-4xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.4xl'),
          lineHeight: theme('lineHeight.4xl'),
          letterSpacing: theme('space.4xl'),
          fontWeight: theme('fontWeight.4xl')
        },
        '.fontStyle-5xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.5xl'),
          lineHeight: theme('lineHeight.5xl'),
          letterSpacing: theme('space.5xl'),
          fontWeight: theme('fontWeight.5xl')
        },
        '.fontStyle-6xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.6xl'),
          lineHeight: theme('lineHeight.6xl'),
          letterSpacing: theme('space.6xl'),
          fontWeight: theme('fontWeight.6xl')
        },
        '.fontStyle-7xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.7xl'),
          lineHeight: theme('lineHeight.7xl'),
          letterSpacing: theme('space.7xl'),
          fontWeight: theme('fontWeight.7xl')
        },
        '.fontStyle-8xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.8xl'),
          lineHeight: theme('lineHeight.8xl'),
          letterSpacing: theme('space.8xl'),
          fontWeight: theme('fontWeight.8xl')
        },
        '.fontStyle-9xl': {
          fontFamily: theme('fontFamily.Borda'),
          fontSize: theme('fontSize.9xl'),
          lineHeight: theme('lineHeight.9xl'),
          letterSpacing: theme('space.9xl'),
          fontWeight: theme('fontWeight.9xl')
        },
      }
      addUtilities(fontUtilities, ['responsive']);
    })
  ]
}
