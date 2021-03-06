'use strict';

var path = require('path');
var webpack = require('webpack');
var buildPath = path.resolve(__dirname, '/dist/');
var mainPath = path.resolve(__dirname, 'src', 'index.js');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');


module.exports = {
    devtool: 'eval-source-map',
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    entry: [
        'webpack-hot-middleware/client?reload=true',
        mainPath
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [nodeModulesPath],
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test:   /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url',
                query: {
                    limit: 10000,
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};