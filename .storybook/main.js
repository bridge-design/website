/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../tokens/**/*.mdx',
    '../tokens/**/*.stories.@(js|jsx|mjs|ts|tsx)',
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

  webpackFinal: async (config, { configType }) => {
    // Find the existing rule for handling files
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))

    // Exclude SVGs from the default file-loader so that they can be handled by @svgr/webpack
    fileLoaderRule.exclude = /\.svg$/

    // Add @svgr/webpack loader to handle SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
export default config
