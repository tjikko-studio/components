const common = require('./webpack.config.js')

module.exports = common.map((config) => {
  return {
    ...config,
    mode: 'production'
  }
})
