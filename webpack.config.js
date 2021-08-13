const path = require('path')

const componentsConfig = {
  module: {
    rules: [{
      test: /\.tsx$/,
      exclude: /\/node_modules\//,
      use: 'ts-loader',
    }, {
      test: /\.svg$/,
      use: 'react-svg-loader'
    }]
  },
  resolve: {
    roots: [
      __dirname
    ],
    extensions: ['.ts', '.tsx', '.js', '.svg']
  },
  name: 'components',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  }
}

const stylesConfig = {
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: 'ts-loader',
    }]
  },
  resolve: {
    roots: [
      __dirname
    ],
    extensions: ['.ts', '.tsx', '.js']
  },
  name: 'styles',
  entry: path.resolve(__dirname, './styles/index.tsx'),
  output: {
    path: path.resolve(__dirname),
    filename: 'styles.js',
    libraryTarget: 'commonjs',
    library: {
      type: 'var',
      export: 'default',
    },
  }
}

module.exports = [componentsConfig, stylesConfig]
