"use strict";

var path = require('path');

const config = {
    entry: path.resolve(__dirname, './sample/js/sample.js'),
    output : {
        path: path.resolve(__dirname, './sample/compiled'),
        filename: 'sample.js',
        sourceMapFilename: './sample/compiled/[file].map'
    },
    loaders: [
        { test: /\.(js|jsx|svg)$/, loader: 'babel' },
        { test: /\.jsx$/, loader: 'jsx-loader' },
        { test: /\.svg$/, loader: 'svg-react' }
        //{ test: /\.svg$/, loader: 'babel!svg-react' }
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            "react-dom" : __dirname + '/node_modules/react'
        }
    }
};

module.exports = config;
