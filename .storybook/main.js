module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: [
    '../src/**/*.stories.tsx'
  ],
  addons: ['@storybook/addon-postcss', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls', 'storybook-addon-themes'],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('react-svg-loader')
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config
  }
}
