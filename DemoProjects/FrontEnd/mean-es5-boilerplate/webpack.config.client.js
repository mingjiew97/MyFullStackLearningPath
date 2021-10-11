var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: __dirname + '/src/client/js/main.js',
  output: {
    path: __dirname + '/dist/public',
    filename: 'client.bundle.js',
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
      template: __dirname + "/src/client/index.html",
      inject: 'body'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: '/src/client',
    port: 4000
  }
};