// @ts-check

module.exports = {
  content: [
    './components-new/**/*.{ts,tsx}', // Ensure Storybook and components are included
    './tokens/**/*.{ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
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
