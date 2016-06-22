var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
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
            }
            // {
            //     test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "url?limit=10000&mimetype=application/font-woff"
            // },
            // {
            //     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "url?limit=10000&mimetype=application/octet-stream"
            // },
            // {
            //     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "file"
            // },
            // {
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: "url?limit=10000&mimetype=image/svg+xml"
            // }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};