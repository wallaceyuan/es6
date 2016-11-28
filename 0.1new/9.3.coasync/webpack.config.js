var path = require('path');
// 产出html模板
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');
var jqueryPath = path.join(__dirname,'./node_modules/jquery/dist/jquery.js')

function rewriteUrl(replacePath) {
    return function (req, opt) {
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";
        req.url = req.path.replace(opt.path, replacePath) + query;
        console.log("rewriting ", req.originalUrl, req.url);
    };
}
module.exports = {
    //打包的入口文件  String|Object
    devServer: {
        stats:{colors:true},
        ports:8080,
        hot: true,
        contentBase:'build'/*,
        proxy: [
            {
                path: /^\/api\/(.*)/,
                target: "http://localhost:8080/",
                rewrite: rewriteUrl('/$1\.json'),
                changeOrigin: true
            }
        ]*/
    },
    entry: {
      index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './src/ini_v8.js')
      ]
    },
    output: { //配置打包结果     Object
        //定义输出文件路径
        path: path.resolve(__dirname, 'build'),
        //指定打包文件名称
        filename: 'bundle.js'
    },
    resolve: {
        extension: ['', '.jsx', '.js', '.json'],
        // 提高webpack搜索的速度
        alias: {
            'jquery':jqueryPath
        }
    },
    module: {
        noParse: [jqueryPath],
        loaders:[
            {
                test: /\.js[x]?$/,
                loaders: ['babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserWebpackPlugin({ url: 'http://localhost:8080' })
        //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
};
