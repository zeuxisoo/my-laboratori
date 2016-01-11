var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var baseConfig = require('./webpack.config.base');

baseConfig.entry.unshift("webpack-dev-server/client?http://localhost:9090", "webpack/hot/dev-server");
baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
baseConfig.devtool = 'eval';

var app = new WebpackDevServer(webpack(baseConfig), {
    publicPath: baseConfig.output.publicPath,
    hot: true,
});

app.listen(9090, '0.0.0.0', function (err, result) {
    if (err) {
        console.log(err);
    }else{
        console.log('http://localhost:9090');
    }
});
