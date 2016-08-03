# step-01 目前已完成，你可以完整运行

本模板综合运用了react+webpack+es2015。  
本模板是以实际应用为目的，由基础配置向高级配置逐步递进。  
这是React-Study的第一个版本，React版本为15.2.1，该版本完全满足你单纯学习React的需求  
本模板有两种模式：  

1. 开发模式————有热替换功能，可以将错误信息捕捉并高亮显示到页面。
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

####[webpack](https://npm.taobao.org/package/react-dom) [必需]
> 于人而言，尤其是当开发大型项目时，每个包每个模块每个静态资源都应尽可能的条理清晰的罗列出来，  
这样方便我们开发；于机器而言，就不需要这么“条理清晰”了，此时应最大限度的压缩优化这些资源，  
如何把这些资源模块“杂糅”在一起，这就是webpack要做的。  
安装：`npm install --save-dev webpack`  
备注：webpack 2.0 即将发布  
webpack 最基本的启动webpack命令  
webpack -w 提供watch方法，实时进行打包更新  
webpack -p 压缩混淆脚本，这个非常非常重要！  
webpack -d 生成map映射文件，告知哪些模块被最终打包到哪里了,方便调试  
webpack --progress 显示打包进程，百分比显示  
webpack --config XXX.js //使用另一份配置文件（比如webpack.config2.js）来打包
webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤  
webpack --profile 输出性能数据，可以看到每一步的耗时  
webpack  --display-error-details 方便出错时能查阅更详尽的信息（比如 webpack 寻找模块的过程），从而更好定位到问题。  
webpack --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块  
[webpack入门配置](https://segmentfault.com/a/1190000005089993)

---

####[webpack-dev-middleware](https://npm.taobao.org/package/webpack-dev-middleware) [开发需要]
> 它是一个用来组织包装webpack使其变成中间件的容器。（中间件的用途就是在输入和输出的过程中加工的一种手段）  
webpack本身只负责打包编译，webpack-dev-server是协助我们开发的服务器，这个服务器底层是靠express操作的。  
我们的页面如何在这个服务器上更新呢，首先是取得webpack打包好的资源，这就需要在`请求`到`响应`的过程中通过  
express的中间件取得资料， 而方法就是通过webpack-dev-middleware来实现。  
这个中间件只在开发环境中使用，切忌用在生产环境中。  
安装：`npm install --save-dev webpack-dev-middleware`  

####这个中间件有两点好处：  

1. 直接在内存中操作文件，而非磁盘中。这样处理速度更快。  
1. 在监视（watch）模式下，如果文件改变，中间件立即停止提供之前的bundle，并且会延迟  
请求回应，直到新的编译完成，如此一来，文件修改后，你可以直接刷新页面，而不用等待编译。

---

####[webpack-hot-middleware](https://npm.taobao.org/package/webpack-hot-middleware) [开发需要]  
>  `webpack-dev-middleware` + `webpack-hot-middleware` 即可让我们用 `express`   
定制一个有热替换功能的 `webpack` 开发服务器。  
安装：`npm install --save-dev webpack-hot-middleware`  

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

#### [babel-polyfill](https://github.com/babel/babel) [必需]
> Babel默认只转换新的JavaScript语法，而不是转换新的API，  
比如Iterator、Generator、Set、Maps、Proxy、Reflect，Symbol、Promise等全局对象，  
以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。  
举例来说，ES6在Array对象上新增了Array.from方法。  
Babel就不会转码这个方法，如果想让这个方法运行，必须使用babel-polyfill  
安装：`npm install --save babel-polyfill`

####[babel-preset-es2015](https://github.com/babel/babel) [必需]  
> es2015转码规则。为所有es6插件所设置的babel预设，  
有了它，诸如，es6的箭头函数，类，等等语法特性才能向es5转换。  
安装：`npm install --save-dev babel-preset-es2015`

---

####[babel-preset-es2015-loose](https://github.com/bkonkle/babel-preset-es2015-loose) [非必需]  
> 使es6转译成的es5更具有兼容性！在移动端，很多安卓手机兼容性比较差，你懂的  
安装：`npm install --save-dev babel-preset-es2015-loose`

---

####[babel-preset-react](https://github.com/babel/babel) [必需]  
> react转码规则。为所有react插件所设置的babel预设。有了它，才能识别转译jsx语法等。  
安装：`npm install --save-dev babel-preset-react`

---

####[react-hot-loader](https://npm.taobao.org/package/react-hot-loader) [开发需要]  
> 可以使react组件在浏览器上实时更新而无需手动刷新。  
安装：`npm install --save-dev react-hot-loader@3.0.0-beta.2`  
备注：用的是3.0最新版本，这版本很强大。

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

####[redbox-react](https://github.com/KeywordBrain/redbox-react) [开发需要]  
> 这个插件将会以一个非常优雅的方式（看demo演示）将你的错误呈现在页面上，这样就省去了查看console.log的麻烦；

---

####[html-webpack-plugin](https://npm.taobao.org/package/html-webpack-plugin) [小工具]  
> 一个服务于webpack打包资源的简易的HTML文件生成器,它可以动态生成HTML  
之所以要动态生成，主要是希望webpack在完成前端资源打包以后，自动将打包后的资源路径和版本号写入HTML中，达到自动化的效果
安装：`npm install --save-dev html-webpack-plugin`  

---

####[express](https://npm.taobao.org/package/express) [开发需要]  
> 基于 Node.js 平台，快速、开放、极简的 web 开发框架。  
在这里用于配置开发服务器。  
安装：`npm install --save-dev express`

---

####[rimraf](https://npm.taobao.org/package/rimraf) [小工具]
> 一个基于node的深层删除工具（楼主曾经用window自带的删除命令删node_modules花了十分钟，用这个删十秒搞定！）  
安装：`npm install --save-dev rimraf`

---


