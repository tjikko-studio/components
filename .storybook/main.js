module.exports = {
  stories: [
    // Paths to the story files
    '../stories/components/**/*.stories.mdx',
    '../stories/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    })
    return config
  }
}
