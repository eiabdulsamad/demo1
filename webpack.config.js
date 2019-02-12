const path = require('path');
const webpack = require('webpack');
const config = require('config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: ( process.env.NODE_ENV ? process.env.NODE_ENV : 'development' ),
  entry: './static/scss/style.scss',
  output: {
    path: path.resolve(__dirname, 'temp'),
    publicPath: config.get('publicPath')
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          }, 'css-loader', 'postcss-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico|eot|ttf|woff)$/,
        use: [
          {
            loader: 'url-loader'
            // options: {
            //   limit: 8192
            // }
          }
        ]
      }
    ]
  },
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../static/css/style.css"
    })
  ],
  devtool: ( 'production' === process.env.NODE_ENV ? 'source-map' : 'cheap-module-eval-source-map' )
};
