/**
 * 开发模式下的webpack配置
 * 在整个项目开发过程中，几乎99%的时间都是在这个模式下进行的
 * 注意。两种模式的配置有较大差异！！
 */
// webpack 2.0 配置文档 https://webpack.js.org/configuration/

const path = require('path');
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import rucksackCss from 'rucksack-css'
import px2rem from 'postcss-pxtorem';
const px2remOpts = {
  rootValue: 100,
  propWhiteList: [],
};

export default {
  entry: [
    './src/webpack-public-path',  // 服务器静态资源路径配置，保证首先载入
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/js/index.js')
  ],

  output: {
    path: `${__dirname}/src`, // 产出位置
		filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: [
					path.resolve(__dirname, 'src/js')
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              parser: 'postcss-scss'
            }
          }
        ]
      },
      // 组件样式，需要私有化，单独配置

      {
        test: /\.scss$/,
        include: [
					path.resolve(__dirname, 'src/styles')
        ],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              parser: 'postcss-scss'
            }
          }
        ]
      },
      // 公有样式，不需要私有化，单独配置

      {
        test: /\.css$/,
        include: [
					path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        use: 'url-loader'
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './src')
    ],
    extensions: ['', '.web.js', '.js', '.json'],

    // 路径别名, 懒癌福音
    alias:{
      app: path.resolve(__dirname,'src/js'),
      // 以前你可能这样引用 import { Nav } from '../../components'
      // 现在你可以这样引用 import { Nav } from 'app/components'

      style: path.resolve(__dirname,'src/styles')
      // 以前你可能这样引用 @import "../../../styles/mixins.scss"
      // 现在你可以这样引用 @import "style/mixins.scss"
    }
  },

	devtool: 'cheap-eval-source-map',
  // 开发选项 eval eval-source-map cheap-eval-source-map cheap-module-eval-source-map
  // 生产选项 source-map cheap-source-map cheap-module-source-map
  // 相关链接 https://webpack.js.org/configuration/devtool/

	context: path.resolve(__dirname, 'src'),
  // webpack 的主目录

  target: 'web',
  // 指明打包运行在何种环境下

  stats: 'minimal',
  // 输出打包相关信息日志

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 激活 HMR

    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.html',
      title: '开发模式',
      favicon:'./src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash:true,
      // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
      // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！
      inject: 'body'
    })
  ],

  postcss: ()=> [precss,autoprefixer,rucksackCss,px2rem(px2remOpts)]
};
