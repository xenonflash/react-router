var webapck = require('webpack');

module.exports = {
  entry: {
      app: './src/js/app.js'
  },
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
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
