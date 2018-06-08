const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractCSSPlugin = require('mini-css-extract-plugin');
const TSconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src/index.tsx');
const BUILD_DIR = path.resolve(__dirname, './build');
const TEMPLATE_DIR = path.resolve(__dirname, './src/template.index.html');
const TSconfig_DIR = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  entry: {
    app: APP_DIR,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: [
      "ts", "tsx", "js"
    ],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          }
        ]
      },
      {
        test: /scss$/,
        use: [
          ExtractCSSPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new ExtractCSSPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HTMLPlugin({
      template: TEMPLATE_DIR,
      inject: true,
    }),
    new TSconfigPathsPlugin({
      configFile: TSconfig_DIR,
    })
  ]
}
