const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractCSSPlugin = require('mini-css-extract-plugin');

const APP_DIR = path.resolve(__dirname, './src/index.tsx');
const BUILD_DIR = path.resolve(__dirname, './build');
const TEMPLATE_DIR = path.resolve(__dirname, './src/template.index.html');
const GAME_DIR = path.resolve(__dirname, './src/game/entry.ts');

module.exports = {
  entry: {
    app: APP_DIR,
    game: GAME_DIR,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: [
      ".ts", ".tsx", ".js", ".json"
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
    new CleanPlugin(['build'], {
      exclude: ['assets'],
    }),
    new ExtractCSSPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HTMLPlugin({
      template: TEMPLATE_DIR,
      inject: true,
    })
  ]
};
