const prodConfig = require('./webpack.prod.js')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = prodConfig.map(({plugins = [], ...config}) => {
  return {
    ...config,
    plugins: plugins.concat([new BundleAnalyzerPlugin({analyzerPort: 'auto'})])
  }
})
