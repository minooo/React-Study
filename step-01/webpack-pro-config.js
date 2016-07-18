/**
 * 开发模式下的webpack配置
 * 在整个项目开发过程中，几乎99%的时间都是在这个模式下进行的
 *
 */

var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack中生成HTML的插件，

module.exports = {

  entry: {
    index: './src/index.js'
  },
  // 页面入口文件配置

  output: {
    path: path.join(__dirname, 'dist'),
    //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它

    publicPath: '/static/',
    //模板、样式、脚本、图片等资源对应的server上的路径

    filename: 'bundle.js',
    //页面对应的主js的生成配置

  },
  // 文件输出目录

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),     //热替换

    new HtmlWebpackPlugin({           //根据模板插入css/js等生成最终HTML
      favicon:'./src/favicon.ico',    //favicon路径
      filename:'/',                   //生成的html存放路径，相对于 path
      template:'./src/index.tpl.html',    //html模板路径
      inject:true,                    //js插入的位置，true/'head'  false/'body'
      hash:true,                      //为静态资源生成hash值
      // chunks: ['vendors', 'index'] //需要引入的chunk，不配置就会引入所有页面的资源，本例不配置
      minify:{                        //压缩HTML文件
        removeComments:true,          //移除HTML中的注释
        collapseWhitespace:false      //删除空白符与换行符
      }
    })
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