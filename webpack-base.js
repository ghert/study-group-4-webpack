'use strict';

import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';

export default {
    entry: {
        main: "./src/main.js",
        unsupported: "./src/unsupported.js",
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.json/, loader: 'json-loader'}
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
        })
    ]
};
