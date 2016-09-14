var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'public','build');
var mainPath = path.resolve(__dirname, 'src', 'index.js');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');


module.exports = {
    devtool: 'inline-source-map',
    entry: [
        // 'webpack/hot/dev-server',
        // 'webpack-dev-server/client?http://127.0.0.1:8080/',
        mainPath
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                // exclude: /node_modules/,
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
    // node: {
    //     net: 'empty',
    //     tls: 'empty',
    //     fs: 'empty',
    //     dns: 'empty',
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        // new webpack.NoErrorsPlugin()
    ]
};