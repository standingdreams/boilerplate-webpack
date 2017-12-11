/*
- [x] Minify JS
- [x] Minify SCSS
- [ ] Hot Module Replacement with extracted CSS
- [ ] Tree Shaking
- [x] Separate Environments (dev and prod)
- [x] Autoprefix CSS
- [ ] Sourcemap
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

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
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            }
          ]
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('_assets/css/styles.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    hot: true
  }
};

module.exports = config;

if(process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCSSAssets(),
  )
}