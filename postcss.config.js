const postcssConfig = {
  plugins: [
    'tailwindcss',
    'postcss-nested',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}

if (process.env.NODE_ENV === 'production') {
  postcssConfig.plugins.push(
    require('cssnano')
  )
}

module.exports = postcssConfig
