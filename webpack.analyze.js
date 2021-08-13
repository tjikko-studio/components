const devConfig = require('./webpack.dev.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = devConfig.map(({ plugins = [], ...config}) => {
  return {
    ...config,
    plugins: plugins.concat([
      new BundleAnalyzerPlugin({
        analyzerPort: 'auto'
      })
    ])
  }
})
