/**
 * 开发模式下的webpack配置
 * 在整个项目开发过程中，几乎99%的时间都是在这个模式下进行的
 *
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'cheap-module-eval-source-map',
  // devtool 指明了sourcemap的生成方式，它有七个选项，具体请参考 https://segmentfault.com/a/1190000004280859
  // sourcemap 的作用就是为调试代码提供便利
  // cheap-module-eval-source-map 绝大多数情况下都会是最好的选择，这也是下版本 webpack 的默认选项。

  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  // 页面入口文件配置

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  // 文件输出目录

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}