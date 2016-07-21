/**
 * 产品模式下的webpack配置
 *
 * 注意。两种模式的配置有较大差异！！
 */

var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack中生成HTML的插件，

module.exports = {

  devtool: false,

  entry: {
    index: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      /*'react-redux',
      'react-router',
      'react-router-redux',
      'redux'*/
    ]
    // 为了优化，切割代码，提取第三方库，注释的部分是将来需要切割的
  },
  // 页面入口文件配置

  output: {
    path: path.join(__dirname, 'dist'),
    //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它

    publicPath: '',
    //模板、样式、脚本、图片等资源对应的server上的路径

    filename: 'bundle.js',
    // 命名生成的JS
  },
  // 文件输出目录

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // webapck 会给编译好的代码片段一个id用来区分
    // 而这个插件会让webpack在id分配上优化并保持一致性。
    // 具体是的优化是：webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    // 压缩代码

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.CommonsChunkPlugin('vendor.js'),

    new HtmlWebpackPlugin({           //根据模板插入css/js等生成最终HTML
      title: '产品模式',
      filename:'index.html',          //名字
      favicon:'./src/favicon.ico',    //favicon路径
      template:'./src/index.tpl.html',    //html模板路径
      inject:'body',                    //js插入的位置，true/'head'  false/'body'
      //chunks: ['vendors', 'vendor.bundle'],  //需要引入的chunk，不配置就会引入所有页面的资源，本例不配置
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