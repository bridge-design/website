// @ts-check

/** @type {import("tailwindcss/types").Config } */
const config = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
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
