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
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.25rem",
        "4xl": "1.25rem",
        "5xl": "1.25rem",
        "6xl": "1.25rem",
        "7xl": "1.25rem",
        "8xl": "1.25rem",
        "9xl": "1.25rem"
      },
      lineHeight:{
        "xl": "1.5rem",
        "2xl": "1.5rem",
        "3xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "1rem",
        "6xl": "1rem",
        "7xl": "1rem",
        "8xl": "1rem",
        "9xl": "1rem"
      },
      space: {
        "xl": "4%",
        "2xl": "1%",
        "3xl": "2%",
        "4xl": "2%",
        "5xl": "5%m",
        "6xl": "3%",
        "7xl": "4%",
        "8xl": "4%",
        "9xl": "4%"
      },
      fontWeight: {
        "xl": "500",
        "2xl": "600",
        "3xl": "600",
        "4xl": "600",
        "5xl": "500",
        "6xl": "500",
        "7xl": "500",
        "8xl": "40",
        "9xl": "40"
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
  },
  variants: {
    extend: {

    }
  },
  plugins: []
}
