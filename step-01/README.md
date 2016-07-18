## 需要哪些包

####[react.js](https://facebook.github.io/react/index.html) [必需]
> React是用来构建用户界面的js库，属于view层。  
  它有两大特点：1，单向数据绑定；2，虚拟DOM  安装：`npm install --save react`
  
---

####[react-dom.js](https://npm.taobao.org/package/react-dom) [必需]
> react.js 主要用来创建元素和组件，当你想在html中渲染你的组件的时候，你还得需要
react-dom.js。同时，react-dom.js依赖于react.js。
安装：`npm install --save react-dom`

---

####[webpack](https://npm.taobao.org/package/react-dom) [必需]
> 于人而言，尤其是当开发大型项目时，每个包每个模块每个静态资源都应尽可能的条理清晰的罗列出来，这样方便
我们开发；于机器而言，就不需要这么“条理清晰”了，此时应最大限度的压缩优化这些资源，
如何把这些资源模块“杂糅”在一起，这就是webpack要做的。
安装：`npm install --save-dev webpack`
备注：webpack 2.0 即将发布
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
> Babel是一个转换编译器，它能将ES6转换成可以在浏览器中运行的代码。作为下一代javascript语言标准，请拥抱
ES6(ES2015)吧！`babel-core` 是Babel编译器的核心。
安装：`npm install --save-dev babel-core`

---

####[babel-loader](https://npm.taobao.org/package/babel-loader) [必需]
> loader 用于转换应用程序的资源文件，他们是运行在nodejs下的函数，
使用参数来获取一个资源的来源并且返回一个新的来源针对webpack的babel加载器。
`babel-loader` 就是告诉webpack去加载我们写的使用了es6语法的js文件。
安装：`npm install --save-dev babel-loader`

---

####[babel-preset-es2015](https://github.com/babel/babel) [必需]
> es2015转码规则。为所有es6插件所设置的babel预设，有了它，诸如，es6的箭头函数，类，等等语法特性才能向es5转换。
安装：`npm install --save-dev babel-preset-es2015`

---

####[babel-preset-es2015-loose](https://github.com/bkonkle/babel-preset-es2015-loose) [非必需]
> 使es6转译成的es5更具有兼容性！
安装：`npm install --save-dev babel-preset-es2015-loose babel-preset-es2015`

---

####[babel-preset-react](https://github.com/babel/babel) [必需]
> react转码规则。为所有react插件所设置的babel预设。有了它，才能识别转译jsx语法等。
安装：`npm install --save-dev babel-preset-react`

---

####[babel-preset-react-hmre](https://npm.taobao.org/package/babel-preset-react-hmre) [开发需要]
> 一个babel的预设，关于React组件的热替换和错误捕捉。
安装：`npm install --save-dev babel-preset-react-hmre`

---

####[babel-preset-stage-X](https://npm.taobao.org/package/babel-preset-stage-0) [必需]
> ES7不同阶段语法提案的转码规则（共有4个阶段），选装**一个**
在进行实际开发时，可以更具需要来设置对应的stage。如果省事懒得折腾，一般设置为stage-0即可。
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-stage-3
[stage-X详解](http://www.cnblogs.com/flyingzl/p/5501247.html)

---

####[react-hot-loader](https://npm.taobao.org/package/react-hot-loader) [开发需要]
> 可以使react组件在浏览器上实时更新而无需手动刷新。
安装：`npm install --save-dev react-hot-loader`
备注：rhl 3.0即将发布。

---

####[html-webpack-plugin](https://npm.taobao.org/package/html-webpack-plugin) [小工具]
> 一个服务于webpack打包资源的简易的HTML文件生成器。
安装：`npm install --save-dev html-webpack-plugin`

---

####[express](https://npm.taobao.org/package/express) [开发需要]
> 基于 Node.js 平台，快速、开放、极简的 web 开发框架。
在这里用于配置开发服务器。
安装：`npm install --save-dev express`

---
