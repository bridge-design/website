import path from 'path'
/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../tokens/**/*.mdx',
    '../tokens/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../components-new/**/*.mdx',
    '../components-new/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../pages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../pages/**/*.mdx',
  ],
  docs: {
    autodocs: true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
        ],
      },
    },
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  staticDirs: ['../public'],

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      tsconfigPath: path.resolve(__dirname, '../../../tsconfig.json'),
      // Excludes props that are coming from node_modules (for example HTML Attributes)
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

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
