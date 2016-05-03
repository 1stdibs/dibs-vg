"use strict";

var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './sample/js/sample.js'),
    output : {
        path: path.resolve(__dirname, './sample/compiled'),
        filename: 'sample.js',
        sourceMapFilename: './sample/compiled/[file].map'
    },
    module : {
        loaders: [
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            { test: /\.svg$/, loader: 'svg-react' }
        ]
    }
};
