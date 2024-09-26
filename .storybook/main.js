/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../tokens/**/*.mdx',
    '../components-new/**/*.mdx',
    '../components-new/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  staticDirs: ['../public'],

  docs: {},
}
export default config
