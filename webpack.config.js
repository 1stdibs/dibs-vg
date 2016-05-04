"use strict";

var path = require('path');
console.log(__dirname + '/node_modules/react');

module.exports = {
    entry: path.resolve(__dirname, './sample/js/sample.js'),
    output : {
        path: path.resolve(__dirname, './sample/compiled'),
        filename: 'sample.js',
        sourceMapFilename: __dirname + './sample/compiled/[file].map'
    },
    devtool : 'source-map',
    module : {
        loaders: [
            { test: /\.(js|jsx|svg)$/, loader: 'babel', query: { presets: ['es2015', 'stage-2', 'react']}},
            { test: /\.svg$/, loader: 'svg-react' },
            { test: /\.json/, loader: 'json' }
            //{ test: /\.scss/, loaders: ["style", "css", "sass"] }
        ],
        resolve: {
            alias: {
                "react-dom": __dirname + '/node_modules/react'
            }
        }
    }
};
