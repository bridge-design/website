// @ts-check

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
    './data/**/*.mdx',
    './node_modules/\\@bridge-the-gap/design-system/dist/**/*.js',
    './node_modules/\\@bridge-the-gap/design-system/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

let finalConfig = config

module.exports = finalConfig
