var webpack = require('webpack');
var discardComments = require('postcss-discard-comments');

var baseConfig = require('./webpack.config.base');

baseConfig.devtool = 'hidden-source-map';

baseConfig.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        '__DEV__': false,
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        },
        compressor: {
            screw_ie8: true,
            warnings: false
        }
    })
);

baseConfig.postcss = function() {
    return [
        discardComments({
            removeAll: true
        })
    ]
}


module.exports = baseConfig;
