var webapck = require('webpack');

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: './build/',
    publicPath: './build/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      }
    ],
  },
};