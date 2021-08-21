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
    },{
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
          require.resolve('@emotion/babel-preset-css-prop')
        ]
      }
    }]
  },
  resolve: {
    roots: [
      __dirname
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser')
    }
  },
  name: 'components',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
    libraryTarget: 'commonjs-module',
    library: {
      type: 'var',
      export: 'default',
    },
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
    libraryTarget: 'commonjs-module',
    library: {
      type: 'var',
      export: 'default',
    },
  }
}

module.exports = [componentsConfig, stylesConfig]
