"use strict";

const config = {
    entry: path.resolve(__dirname, './sample/sample.js'),
    output : {
        path: path.resolve(__dirname, './sample/compiled'),
        filename: 'sample.js',
        sourceMapFilename: './sample/compiled/[file].map'
    },
    loaders: [
        { test: /\.svg$/, loader: 'babel!svg-react' }
    ],
    resolve: {
        alias: {
            "react-dom" : __dirname + '/node_modules/react'
        }
    }
};

module.exports = config;
