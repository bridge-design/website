// @ts-check

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import("tailwindcss/types").Config } */
const config = {
  content: [
    './components-new/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './tokens/**/*.{ts,tsx,md,mdx}',
    './.storybook/**/*.{js,ts,tsx}',

    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.{mdx,tsx}',
    './node_modules/\\@bridge-the-gap/design-system/dist/**/*.js',
    './node_modules/\\@bridge-the-gap/design-system/dist/*.js',
  ],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: 'var(--size-xxs)',
      xs: 'var(--size-xs)',
      sm: 'var(--size-sm)',
      md: 'var(--size-md)',
      lg: 'var(--size-lg)',
      xl: 'var(--size-xl)',
      '2xl': 'var(--size-2xl)',
      '3xl': 'var(--size-3xl)',
      '4xl': 'var(--size-4xl)',
      '5xl': 'var(--size-5xl)',
      '6xl': 'var(--size-6xl)',
      '7xl': 'var(--size-7xl)',
      '8xl': 'var(--size-8xl)',
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      '9Xl': 500,
      '8Xl': 500,
      '7Xl': 500,
      '6Xl': 500,
      '5Xl': 500,
      '4Xl': 500,
      '3Xl': 500,
      '3XlBold': 700,
      '2Xl': 400,
      '2XlMedium': 500,
      xl: 400,
      xlMedium: 500,
      lg: 400,
      lgItalic: 400,
      lgMedium: 500,
      lgMediumItalic: 500,
      base: 400,
      baseMedium: 500,
      sm: 400,
      smMedium: 500,
      xs: 400,
      xsMedium: 500,
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      '9Xl': '128px',
      '8Xl': '96px',
      '7Xl': '72px',
      '6Xl': '60px',
      '5Xl': '48px',
      '4Xl': '45px',
      '3Xl': '37.5px',
      '3XlBold': '37.5px',
      '2Xl': '34.8px',
      '2XlMedium': '34.8px',
      xl: '32px',
      xlMedium: '32px',
      lg: '32px',
      lgItalic: '32px',
      lgMedium: '32px',
      lgMediumItalic: '32px',
      base: '24px',
      baseMedium: '24px',
      sm: '18px',
      smMedium: '18px',
      xs: '16px',
      xsMedium: '16px',
    },
    letterSpacing: {
      '9Xl': '-0.04em',
      '8Xl': '-0.02em',
      '7Xl': '-0.01em',
      '6Xl': '0em',
      '5Xl': '0em',
      '4Xl': '0em',
      '3Xl': '0em',
      '3XlBold': '0em',
      '2Xl': '0em',
      '2XlMedium': '0em',
      xl: '0em',
      xlMedium: '0em',
      lg: '0em',
      lgItalic: '0em',
      lgMedium: '0em',
      lgMediumItalic: '0em',
      base: '0em',
      baseMedium: '0em',
      sm: '0em',
      smMedium: '0em',
      xs: '0em',
      xsMedium: '0em',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '--btg-color-text',
            maxWidth: '80ch',
            a: {
              color: 'var(--btg-color-link)',
              '&:hover': {
                color: 'var(--btg-color-link--hover)',
              },
            },
            p: {
              fontFamily: theme('fontFamily.base'),
            },
            h1: {
              fontSize: 'var(--size-h1)',
            },
            h2: {
              fontSize: 'var(--size-h2)',
            },
            h3: {
              fontSize: 'var(--size-h3)',
            },
            h4: {
              fontSize: 'var(--size-h4)',
            },
            h5: {
              fontSize: 'var(--size-h5)',
            },
            h6: {
              fontSize: 'var(--size-h6)',
            },
          },
        },
      }),
      fontFamily: {
        sans: 'var(--font-interface)',
        '9Xl': 'var(--font-9Xl)',
        '8Xl': 'var(--font-8Xl)',
        '7Xl': 'var(--font-7Xl)',
        '6Xl': 'var(--font-6Xl)',
        '5Xl': 'var(--font-5Xl)',
        '4Xl': 'var(--font-4Xl)',
        '3Xl': 'var(--font-3Xl)',
        '3XlBold': 'var(--font-3XlBold)',
        '2Xl': 'var(--font-2Xl)',
        '2XlMedium': 'var(--font-2XlMedium)',
        xl: 'var(--font-xl)',
        xlMedium: 'var(--font-xlMedium)',
        lg: 'var(--font-lg)',
        lgItalic: 'var(--font-lgItalic)',
        lgMedium: 'var(--font-lgMedium)',
        lgMediumItalic: 'var(--font-lgMediumItalic)',
        base: 'var(--font-base)',
        baseMedium: 'var(--font-baseMedium)',
        sm: 'var(--font-sm)',
        smMedium: 'var(--font-smMedium)',
        xs: 'var(--font-xs)',
        xsMedium: 'var(--font-xsMedium)',
      },
      lineHeight: {
        hero: '72px',
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        // or whichever color you'd like
        html: {
          color: 'var(--btg-color-text)',
          backgroundColor: 'var(--btg-color-background)',
        },
        a: {
          color: 'var(--btg-color-link)',
          '&:hover': {
            color: 'var(--btg-color-link--hover)',
          },
        },
      })
    }),
    require('@tailwindcss/typography'),
  ],
}

module.exports = config
