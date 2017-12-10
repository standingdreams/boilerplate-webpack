/*
1. Bundle jQuery
2. Create JS modules
3. Bundle JS modules
4. Compile SCSS
5. Spin up server
6. Compress images
 */


const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('/_assets/css/style.css');

let config = {
  entry: './src/index.js',
  output: {
    filename: '/_assets/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'babel-preset-es2015',
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use:
      },
    ],
  },
};

module.exports = config;
