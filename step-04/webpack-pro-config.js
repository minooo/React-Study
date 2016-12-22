/**
 * 产品模式下的webpack配置
 *
 * 注意。两种模式的配置有较大差异！！
 */
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
// webpack中生成HTML的插件，

module.exports = {
  entry: {
  // 文件入口配置
    index: './src/js/index',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'redux'
    ]
    // 为了优化，切割代码，提取第三方库（实际上，我们将会引入很多第三方库）
  },
  // 页面入口文件配置

  output: {
  // 文件输出配置

    path: path.join(__dirname, 'dist'),
    // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它.

    publicPath: '',
    // 模板、样式、脚本、图片等资源对应的server上的路径

    filename: 'bundle.js'
    // 命名生成的JS
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // webapck 会给编译好的代码片段一个id用来区分
    // 而这个插件会让webpack在id分配上优化并保持一致性。
    // 具体是的优化是：webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块

    new webpack.optimize.UglifyJsPlugin({
    // 压缩代码
      compressor: {
        warnings: false
      }
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false
    }),
    // 很多库的内部，有process.NODE_ENV的判断语句，
    // 改为production。最直观的就是没有所有的debug相关的东西，体积会减少很多

    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js' ),
    // 'vendor' 就是把依赖库(比如react react-router, redux)全部打包到 vendor.js中
    // 'vendor.js' 就是把自己写的相关js打包到bundle.js中
    // 一般依赖库放到前面，所以vendor放第一个

    new HtmlWebpackPlugin({
      template:'src/index.html',
      // html模板的路径
      
      title: '产品模式',
      
      filename:'index.html',
      // 文件名以及文件将要存放的位置

      favicon:'./src/favicon.ico',
      // favicon路径
      
      inject:'body',
      // js插入的位置，true/'head'  false/'body'

      chunks: ['vendor', 'index' ],
      // 指定引入的chunk，根据entry的key配置，不配置就会引入所有页面的资源

      hash:true,
      // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
      // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！

      minify:{
      // 压缩HTML文件
        removeComments:true,
        // 移除HTML中的注释

        collapseWhitespace:true
        // 删除空白符与换行符
      }
    })
  ],

  resolve: {
    // 实际就是自动添加后缀，默认是当成js文件来查找路径
    // 空字符串在此是为了resolve一些在import文件时不带文件扩展名的表达式
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.js', '.json'],

    // 路径别名, 懒癌福音
    alias:{
      app:path.resolve(__dirname,'src/js'),
      // 以前你可能这样引用 import { Nav } from '../../components'
      // 现在你可以这样引用 import { Nav } from 'app/components'

      style:path.resolve(__dirname,'src/styles')
      // 以前你可能这样引用 import "../../../styles/mixins.scss"
      // 现在你可以这样引用 import "style/mixins.scss"

      // 注意：别名只能在.js文件中使用。
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/js'),
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss?parser=postcss-scss'
        ]
      },
      // 组件样式，需要私有化，单独配置

      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/styles'),
        loader: 'style!css!postcss?parser=postcss-scss'
      },
      // 公有样式，不需要私有化，单独配置

      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'node_modules'),
        loader: 'style!css!postcss'
      },

      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer'),
      require('rucksack-css'),
      pxtorem({
        rootValue: 100,
        propWhiteList: [],
      })
    ];
  }
};