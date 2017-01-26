'use strict';

import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpritesmithPlugin from 'webpack-spritesmith';
import autoprefixer from 'autoprefixer';
import path from 'path';

const extractCSS = new ExtractTextPlugin('[name]-[hash].css');

const envMap = {
  dev: 'local',
  prod: 'prod'
};

export default {
  entry: {
    main: './src/main.js',
    unsupported: './src/unsupported.js'
  },
  output: {
    path: './dist',
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.json/, loader: 'json-loader'},
      {test: /\.scss$/i, loader: extractCSS.extract(['css-loader', 'sass-loader', 'postcss-loader'])},
      {
        test: /\.(png|jpg|gif|ico|woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
        query: {name: '[name]-[hash].[ext]'}
      }
    ]
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'images'),
      config: path.resolve(__dirname, 'src', 'env', envMap[process.env.NODE_ENV], 'conf')
    }
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons-[hash].js'
    }),
    new HtmlWebpackPlugin(),
    new SpritesmithPlugin({
      retina: '@2x',
      src: {
        cwd: './images/sprites',
        glob: '*.png'
      },
      target: {
        image: './images/generated/sprite.png',
        css: './src/generated/styles/sprites.scss'
      },
      apiOptions: {
        cssImageRef: `~images/generated/sprite.png`
      },
      spritesmithOptions: {
        algorithm: 'top-down',
        padding: 1
      }
    }),
    extractCSS
  ],
  postcss: () => {
    return [
      autoprefixer
    ];
  }
};
