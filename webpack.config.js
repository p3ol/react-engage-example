const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'swc-loader',
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[fullhash].js',
    publicPath: '/',
  },
  devServer: {
    port: 8888,
    host: 'localhost',
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
