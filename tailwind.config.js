// @ts-check

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components-new/**/*.{ts,tsx}', // Ensure Storybook and components are included
    './tokens/**/*.{ts,tsx,md,mdx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './pages/**/*.{js,ts,tsx}',
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

// const { fontFamily } = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')
// const designSystem = require('@bridge-the-gap/design-system')
// const { merge } = require('lodash')
// const bridgeConfig = designSystem.twconfig

// /** @type {import("tailwindcss/types").Config } */
// const config = {
//   content: [
//     './node_modules/pliny/**/*.js',
//     './app/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,tsx}',
//     './components/**/*.{js,ts,tsx}',
//     './layouts/**/*.{js,ts,tsx}',
//     './data/**/*.mdx',
//     './node_modules/\\@bridge-the-gap/design-system/dist/**/*.js',
//     './node_modules/\\@bridge-the-gap/design-system/dist/*.js',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           500: 'var(--btg-color-primary-500)',
//           400: 'var(--btg-color-primary-400)',
//         },
//         neutral: {
//           600: 'var(--btg-color-neutral-600)',
//           500: 'var(--btg-color-neutral-500)',
//           1000: 'var(--btg-color-neutral-1000)',
//         },
//       },
//       lineHeight: {
//         11: '2.75rem',
//         12: '3rem',
//         13: '3.25rem',
//         14: '3.5rem',
//       },
//       fontFamily: {
//         sans: ['var(--font-inter)', ...fontFamily.sans],
//       },
//       // colors: {
//       //   primary: colors.pink,
//       //   gray: colors.gray,
//       // },
//       typography: ({ theme }) => ({
//         DEFAULT: {
//           css: {
//             a: {
//               color: theme('colors.primary.500'),
//               '&:hover': {
//                 color: `${theme('colors.primary.600')}`,
//               },
//               code: { color: theme('colors.primary.400') },
//             },
//             'h1,h2': {
//               fontWeight: '700',
//               letterSpacing: theme('letterSpacing.tight'),
//             },
//             h3: {
//               fontWeight: '600',
//             },
//             code: {
//               color: theme('colors.indigo.500'),
//             },
//           },
//         },
//         invert: {
//           css: {
//             a: {
//               color: theme('colors.primary.500'),
//               '&:hover': {
//                 color: `${theme('colors.primary.400')}`,
//               },
//               code: { color: theme('colors.primary.400') },
//             },
//             'h1,h2,h3,h4,h5,h6': {
//               color: theme('colors.gray.100'),
//             },
//           },
//         },
//       }),
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: '1.5rem',
//           sm: '2rem',
//           lg: '4rem',
//           xl: '5rem',
//           '2xl': '6rem',
//         },
//       },
//     },
//   },
//   plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
// }

// let finalConfig = merge({}, bridgeConfig, config)

// // Ensure that finalConfig.content.patterns is an array before adding to it
// finalConfig.content.safelist = finalConfig.content.safelist || []
// finalConfig.content.safelist.push('bg-6XL')

// module.exports = finalConfig
