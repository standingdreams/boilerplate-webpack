/*
- [ ] Minify JS
- [ ] Minify SCSS
- [ ] Hot Module Replacement
- [ ] Tree Shaking
- [ ] Separate Environments (dev and prod)
- [ ] Autoprefix CSS
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('/_assets/css/style.css');

let config = {
  entry: './src/js/main.js',
  output: {
    filename: './_assets/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('_assets/css/style.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    hot: true
  }
};

module.exports = config;
