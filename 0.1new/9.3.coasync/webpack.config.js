var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

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
        contentBase:'build',
        proxy: [
            {
                path: /^\/api\/(.*)/,
                target: "http://localhost:8080/",
                rewrite: rewriteUrl('/$1\.json'),
                changeOrigin: true
            }
        ]
    },
    entry: {
        index:path.resolve(__dirname, 'src/index.js'),
        vendor:['jquery']
    },
    output: { //配置打包结果     Object
        //定义输出文件路径
        path: path.resolve(__dirname, 'build'),
        //指定打包文件名称
        filename: '[name].js'
    },
    resolve: {
        extension: ['', '.jsx', '.js', '.json'],
        // 提高webpack搜索的速度
        alias: {
            'jquery':jqueryPath
        }
    },
    module: {
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'zhufeng-react',//标题
            template: './src/index.html', //模板文件
            filename:'./index.html' //产出后的文件名称
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
};