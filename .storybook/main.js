// .storybook/main.js

module.exports = {
    stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-postcss',
        {
            name: '@storybook/addon-postcss',
            options: {
            postcssLoaderOptions: {
                implementation: require('postcss'),
            },
            },
        },
        '@storybook/addon-essentials',
        '@storybook/addon-links'
    ]
  }