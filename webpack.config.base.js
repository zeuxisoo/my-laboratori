var webpack = require("webpack");
var vue = require("vue-loader");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var publicPath = "/build/";

var cssLoader = ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader");

module.exports = {
    entry: ["./src/app.js"],

    output: {
        path: __dirname + publicPath,
        filename: 'bundle.js',
        publicPath: publicPath,
        pathinfo: true
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.css$/,
                loader: cssLoader
            },
        ]
    },

    vue: {
        css: cssLoader
    },

    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },

    plugins: [
        new ExtractTextPlugin("bundle.css", {
            disable: false
        })
    ],
}
