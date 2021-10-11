var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: __dirname + '/src/js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: './src',
    port: 4000
  }
};