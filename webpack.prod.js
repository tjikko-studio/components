/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const common = require('./webpack.config.js')

module.exports = common.map((config) => {
  return {
    ...config,
    mode: 'production'
  }
})
