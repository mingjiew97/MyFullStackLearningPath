var HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = {
  target: 'node',
  entry: __dirname + '/src/server/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'server.bundle.js',
    publicPath: '/'
  },
  externals: [nodeExternals()],
  module: {
    rules: []
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [],
  node: {
    __dirname: false,
    __filename: false
  }
};