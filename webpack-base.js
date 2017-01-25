'use strict';

import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const extractCSS = new ExtractTextPlugin('[name]-[hash].css');

export default {
    entry: {
        main: "./src/main.js",
        unsupported: "./src/unsupported.js"
    },
    output: {
        path: "./dist",
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.json/, loader: 'json-loader'},
            { test: /\.scss$/i, loader: extractCSS.extract(['css-loader','sass-loader', 'postcss-loader']) },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file',
                query: { name: '[name]-[hash].[ext]' }
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "commons",
            filename: "commons-[hash].js"
        }),
        new HtmlWebpackPlugin(),
        extractCSS
    ],
    postcss: () => {
        return [
            autoprefixer
        ];
    }
};
