# step-01 目前已完成，你可以完整运行

本模板综合运用了react+webpack+es2015。  
本模板是以实际应用为目的，由基础配置向高级配置逐步递进。  
这是React-Study的第一个版本，React版本为15.4.2，该版本完全满足你**单纯**学习React的需求  
本模板有两种模式：  

1. 开发模式————如果文件修改并保存后，浏览器将自动刷新页面。
1. 生产模式————将你的资源进行打包，压缩等。

## 核心摘要

- [x] [Webpack](https://webpack.github.io)
- [x] [React](https://facebook.github.io/react/)
- [x] [Babel](https://babeljs.io/)

## [DEMO](https://raw.githubusercontent.com/minooo/test/master/react-study-01.gif)
点击上方DEMO预览

## 安装所有包

```
$ npm install
```

## 启动 开发模式

```
$ npm start
```

## 启动 生产模式（打包输出）

```
$ npm run build
```

## 本模板用到的 __所有包__ 的相关简要说明

####[react.js](https://facebook.github.io/react/index.html) [必需]
> React是用来构建用户界面的js库，属于view层。  
  它有两大特点：1，单向数据绑定；2，虚拟DOM  
  安装：`npm install --save react`

---

####[react-dom.js](https://npm.taobao.org/package/react-dom) [必需]
> react.js 主要用来创建元素和组件，当你想在html中渲染你的组件的时候，  
你还得需要react-dom.js。同时，react-dom.js依赖于react.js。  
安装：`npm install --save react-dom`

---

####[webpack 2.2+](https://webpack.js.org/) [必需]
> Webpack 是一个针对 JavaScript 的打包工具. 然而,   
随着 Webpack 日渐流行, 它逐渐演变成了前端代码的管理工具。  
安装：`npm install --save-dev webpack`  
备注：系列教程全面采用 webpack 2.2.1 +  
[Webpack2 升级指南和特性摘要](https://segmentfault.com/a/1190000008181955)  
[webpack2 命令大全](https://webpack.js.org/api/cli/)

---

####[webpack-dev-server](https://github.com/webpack/webpack-dev-server) [开发需要]
> 开启一个 webpack 服务器，并在文件修改后可自动刷新页面。  
安装：`npm install --save-dev webpack-dev-server`  

---

####[babel-core](https://npm.taobao.org/package/babel-core) [必需]  
> Babel是一个转换编译器，它能将ES6转换成可以在浏览器中运行的代码。  
作为下一代javascript语言标准，请拥抱ES6(ES2015)吧！`babel-core` 是Babel编译器的核心。  
安装：`npm install --save-dev babel-core`

---

####[babel-core](https://npm.taobao.org/package/babel-core) [必需]  
> Babel是一个转换编译器，它能将ES6转换成可以在浏览器中运行的代码。  
作为下一代javascript语言标准，请拥抱ES6(ES2015)吧！`babel-core` 是Babel编译器的核心。  
安装：`npm install --save-dev babel-core`

---

####[babel-loader](https://npm.taobao.org/package/babel-loader) [必需]  
> loader 用于转换应用程序的资源文件，他们是运行在nodejs下的函数，  
使用参数来获取一个资源的来源并且返回一个新的来源针对webpack的babel加载器。  
`babel-loader` 就是告诉webpack去加载我们写的使用了es6语法的js文件。  
安装：`npm install --save-dev babel-loader`

---

#### [babel-runtime](http://babeljs.io/docs/plugins/transform-runtime/#why) [强烈推荐]
> Babel默认只转换新的JavaScript语法，而不是转换新的API，  
比如Iterator、Generator、Set、Maps、Proxy、Reflect，Symbol、Promise等全局对象，  
以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。  
举例来说，ES6在Array对象上新增了Array.from方法。  
[延伸阅读,强烈推荐](https://segmentfault.com/a/1190000006930013?utm_source=tuicool&utm_medium=referral)  
安装：`npm install --save babel-runtime`

---

#### [babel-plugin-transform-runtime](http://babeljs.io/docs/plugins/transform-runtime/#why) [开发需要]
> 和上面的 `babel-runtime` 搭配使用
安装：`npm install --save-dev babel-plugin-transform-runtime`

####[babel-preset-env](https://babeljs.io/docs/plugins/preset-env/#options) [必需]  
> 一个基于你现有环境(默认支持 es2015 es2016 es2017)自动选择你需要的babel插件的babel预设方案。
安装：`npm install --save-dev babel-preset-env`

---

####[babel-preset-react](https://github.com/babel/babel) [必需]  
> react转码规则。为所有react插件所设置的babel预设。有了它，才能识别转译jsx语法等。  
  并且附带“flow”类型检查。
安装：`npm install --save-dev babel-preset-react`

---

####[babel-preset-stage-X](https://npm.taobao.org/package/babel-preset-stage-0) [必需]  
> ES7不同阶段语法提案的转码规则（共有4个阶段），选装**一个**  
在进行实际开发时，可以根据需要来设置对应的stage。如果省事懒得折腾，一般设置为stage-0即可。  
npm install --save-dev babel-preset-stage-0  
npm install --save-dev babel-preset-stage-1  
npm install --save-dev babel-preset-stage-2  
npm install --save-dev babel-preset-stage-3  
[stage-X详解](http://www.cnblogs.com/flyingzl/p/5501247.html)

---

####[html-webpack-plugin](https://npm.taobao.org/package/html-webpack-plugin) [小工具]  
> 一个服务于webpack打包资源的简易的HTML文件生成器,它可以动态生成HTML  
之所以要动态生成，主要是希望webpack在完成前端资源打包以后，自动将打包后的资源路径和版本号写入HTML中，达到自动化的效果
安装：`npm install --save-dev html-webpack-plugin`  

---

####[rimraf](https://npm.taobao.org/package/rimraf) [小工具]
> 一个基于node的深层删除工具（楼主曾经用window自带的删除命令删node_modules花了十分钟，用这个删十秒搞定！）  
安装：`npm install --save-dev rimraf`

---


