"use strict";

const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const postcssImport = require('postcss-import');
const port = process.env.NODE_PORT || '9090';
const babelLoader = {
    test: /\.(js|jsx|svg)$/,
    loader: 'babel',
    query: {
        "presets": ["es2015", "stage-2", "react"]
    }
};

if (process.env.NODE_ENV !== 'production') {
    babelLoader.query.presets.push("react-hmre");
}

module.exports = {
    entry: [
        path.resolve(__dirname, './sample/js/sample.js'),
        'webpack/hot/dev-server',
        `webpack-dev-server/client?http://localhost:${port}/`
    ],
    output: {
        path: path.resolve(__dirname, './sample/compiled'),
        filename: 'sample.js',
        publicPath: '/sample/compiled',
        sourceMapFilename: '[file].map'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            babelLoader,
            { test: /\.svg$/, loader: 'svg-react' },
            { test: /\.json/, loader: 'json' },
            // importLoaders=1 uses global as default, not local
            { test: /\.scss/, loaders: ['style', 'css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss'] }
        ],
        resolve: {
            alias: {
                "react-dom": __dirname + '/node_modules/react'
            }
        }
    },
    postcss(_webpack) {
        return [
            precss,
            postcssImport({
                addDependencyTo: _webpack
            })
        ];
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        stats: {
            colors: true
        }
    }
};

