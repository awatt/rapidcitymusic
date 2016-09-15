'use strict';

var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var buildPath = path.resolve(__dirname, '/dist/');
var mainPath = path.resolve(__dirname, 'src', 'index.js');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');


module.exports = {
    devtool: 'eval-source-map',
    entry: [
        // 'webpack/hot/dev-server',
        // 'webpack-dev-server/client?http://127.0.0.1:8080/',
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
    // new HtmlWebpackPlugin({
    //   template: 'app/index.tpl.html',
    //   inject: 'body',
    //   filename: 'index.html'
    // }),
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};