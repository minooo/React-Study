/**
 * 开发模式下的 webpack 2.2.1 配置
 * 在整个项目开发过程中，几乎99%的时间都是在这个模式下进行的
 * 注意。两种模式的配置有较大差异！！
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*const Dashboard = require('webpack-dashboard');
 const DashboardPlugin = require('webpack-dashboard/plugin');
 const dashboard = new Dashboard();*/

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
    stats: false,
    devtool: "cheap-module-eval-source-map",
    // 关于选项的选择，http://cheng.logdown.com/posts/2016/03/25/679045
    // 具体请参考 https://webpack.js.org/configuration/devtool/#components/sidebar/sidebar.jsx

    context: path.resolve(__dirname, "src"),
    // 指定资源读取的根目录
    // https://webpack.js.org/configuration/entry-context/#components/sidebar/sidebar.jsx

    target: 'web',
    // https://webpack.js.org/configuration/target/

    entry: [
        "./index"
    ],
    // https://webpack.js.org/configuration/entry-context/

    output: {
        path: path.join(__dirname, 'src'),
        // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它

        publicPath: '/',
        // 模板、样式、脚本、图片等资源对应的server上的路径

        filename: "bundle.js",
        // 命名生成的JS
    },
    // https://webpack.js.org/configuration/output/

    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        // 这样，webpack在查找模块时，先查找 node_modules ，如果没找到则在 src 中查找

        extensions: [".js", ".json"],
        // 该配置项将不再要求强制转入一个空字符串，而被改动到了resolve.enforceExtension下
        // 相关文档 https://webpack.js.org/configuration/resolve/
    },

    devServer: {
        contentBase: path.join(__dirname, "src"),
        port: 3000
    },
    // https://webpack.js.org/configuration/dev-server/#devserver

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            __DEV__: true
        }),
        // 很多库的内部，有process.NODE_ENV的判断语句，
        // 改为production。最直观的就是没有所有的debug相关的东西，体积会减少很多

        new DashboardPlugin(dashboard.setData),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.HotModuleReplacementPlugin(),
        // 启用热替换,仅开发模式需要

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin(),
        // 允许错误不打断程序，,仅开发模式需要

        new HtmlWebpackPlugin({
            title: '开发模式',

            filename: 'index.html',
            // 文件名以及文件将要存放的位置

            favicon: 'favicon.ico',
            // favicon路径

            template: 'index.html',
            // html模板的路径

            inject: 'body',
            // js插入的位置，true/'head'  false/'body'

            minify: {
                removeComments: true,
                // 移除HTML中的注释

                collapseWhitespace: true,
                // 删除空白符与换行符

                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
        })
    ]
};