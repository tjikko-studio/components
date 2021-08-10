/**
 * This ugly way of rewriting `npm run start:storybook` seems necessary on A2.
 * Even stranger, running `npm run start:storybook` directly this way won't work…
 */
const path = require('path')

const serverPath = path.join(__dirname, 'node_modules', '.bin', 'http-server')

process.argv.length = 1
process.argv.push(serverPath, 'storybook-static')

require(serverPath)
