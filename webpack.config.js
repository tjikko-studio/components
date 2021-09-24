/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const path = require('path')

/**
 * @type import('webpack').Configuration
 */
const componentsConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/u,
        exclude: /\/node_modules\//u,
        use: 'ts-loader'
      },
      {
        test: /\.svg$/u,
        use: 'react-svg-loader'
      }
    ]
  },
  resolve: {
    roots: [__dirname],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg']
  },
  name: 'components',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
    libraryTarget: 'commonjs-module',
    library: {
      type: 'var',
      export: 'default'
    }
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    vue: 'vue'
  }
}

/**
 * @type import('webpack').Configuration
 */
const stylesConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/u,
        exclude: /node_modules/u,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    roots: [__dirname],
    extensions: ['.ts', '.tsx', '.js']
  },
  name: 'styles',
  entry: path.resolve(__dirname, './styles/index.tsx'),
  output: {
    path: path.resolve(__dirname),
    filename: 'styles.js',
    libraryTarget: 'commonjs-module',
    library: {
      type: 'var',
      export: 'default'
    }
  }
}

module.exports = [componentsConfig, stylesConfig]
