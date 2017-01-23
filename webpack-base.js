'use strict';

export default {
    entry: {},
    output: {},
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
    plugins: []
};
