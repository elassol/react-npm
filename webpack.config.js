var path = require('path');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/components/panel.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.(less)$/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
}

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'build.js'
//   },
//   module: {
//     rules: [
//       { test: /\.(js)$/, use: 'babel-loader' },
//       { test: /\.(less)$/, use: ['style-loader', 'css-loader', 'less-loader'] }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'src/index.html'
//     }),
//     new ExtractTextPlugin('style.css')
//   ]
// }
