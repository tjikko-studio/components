module.exports = {
  core: {
    builder: 'webpack5'
  },
  
  babel: async (options) => ({
    ...options,
    presets: [
      "@emotion/babel-preset-css-prop"
    ]
  }),

  stories: [
    '../src/**/*.stories.tsx'
  ],
  addons: ['@storybook/addon-postcss', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls', 'storybook-addon-themes', '@emotion/babel-preset-css-prop'],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('react-svg-loader')
    })
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          ["react-app", { flow: false, typescript: true }],
          require.resolve("@emotion/babel-preset-css-prop")
        ]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");
    
    return config
  }
}
