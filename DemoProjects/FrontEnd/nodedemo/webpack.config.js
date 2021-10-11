const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'node',
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new Dotenv()
  ],
  node: {
    __dirname: false,
    __filename: false
  }
};