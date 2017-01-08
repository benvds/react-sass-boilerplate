const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        index: ['babel-polyfill', './src/index.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    presets: [
        ['env', {
            targets: {
                ie: 10,
                safari: 6,
                browsers: ['last 2 versions']
            }
        }]
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap")
            }
        ]
    },
    resolve: {
        root: [
            path.resolve('./src'),
        ],
        alias: {
            'modules': path.join(__dirname, 'node_modules'),
        },
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
        new ExtractTextPlugin('[name].css')
    ],
    devServer: {
        // host: '0.0.0.0',
        contentBase: 'src',
        entry: {
            index: './src/index.js'
        },
        inline: true
    }
};

module.exports = config;
