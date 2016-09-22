> [react.js](https://github.com/facebook/react) 本是一个构建用户界面的javascript库，它因单向数据绑定和虚拟DOM两大特点在前端界大放异彩，因为它解决了当下网页性能陷入的瓶颈（因为直接操作DOM导致页面性能损失很大，而虚拟DOM避免了直接操作DOM），再加上单向数据绑定使得业务逻辑更加清晰可控，另外，`react.js` 是大名鼎鼎的Facebook一手打造维护，基于此，react社区也异常活跃，从而良性的推动了react的发展和流行,而React现在已经发展为一个生态圈。

## 认识React生态圈
用阮一峰老师的话说就是：**React已不是一个库，也不是一个框架，而是一个庞大的体系。想要发挥它的威力，整个技术栈都要配合它改造。你要学习一整套解决方案，从后端到前端，都是全新的做法。**时至今日，围绕以React为核心的技术栈也日益成型，它主要包含：
- React,
- npm
- js打包工具（如：webpack）
- ES6
- Routing
- Redux

你不需要把这些都学完才去使用 React. 只需要在你遇到问题需要解决的时候, 才进入相关的学习。

## 学习React生态圈
学习React生态圈是一个综合应用React技术栈的过程，这也是最接近我们实际开发运用React的情境，为此，笔者特地根据以往React开发经验，精心制作了[React-Study](https://github.com/minooo/React-Study)系列React技术栈学习模板，以实际项目开发情境为目标，从最简单的hello,world开始，通过逐步升级配置，来学习React生态圈并最终应用到公司项目中。

React-Study 系列模板主要包含四部分
- [step-01](https://github.com/minooo/React-Study/tree/master/step-01)（已完成）
这部分就是基础的hello,world模板，前面说了，这系列模板是以实际项目开发情境为目标而构建的，虽说是  hello,world的示例，但是它综合应用了 React+webpack+es2015+npm ，并且分为开发模式（开启了热替换和sourcemap）和产品模式（也就是打包，开启了代码压缩等优化）
- [step-02](https://github.com/minooo/React-Study/tree/master/step-02)（已完成）
step-02 是在 step-01的基础上添加额外配置完成的，这一部分添加了 样式，字形，图片，等加载器配置。并初步展示了在项目实践中，React技术栈的一个合理的目录结构应该是怎样的。由于应用了CSSModules以及相关的辅助插件，CSS的语法更加便利简洁，这些在项目的组件样式中都有体现。同时，也展示了在ES6下，React组件相关写法，以及标准语法的规范的推荐。总之，React带你走进组件化的美好
- [step-03](https://github.com/minooo/React-Study/tree/master/step-03)（已完成）
step-03 是在 step-02 的基础上开发的 step-03 主要围绕添加 react-router 进行配置，以及在react移动端开发中，强烈推荐使用antd-mobile 这个特别符合我国国情的react组件库。本模板延续组件化的思想，以及样式的模块化（cssModules), 并以真实项目实践写了几个简单的组件，包括底部导航，好店列表，以及下拉菜单等。 目的就是展示下，在真实项目中，组件化的思想是如何实践的。
- step-04（开发中）
同理，step-04 是在 step-03 的基础上添加额外配置完成，目前仍处于开发中，这部分主要添加 [redux](https://github.com/reactjs/redux)。推荐教程 [redux-tutorial 使用教程](https://github.com/react-guide/redux-tutorial-cn/blob/master/00_introduction.js) 

## 启动React生态圈
本项目启动前默认你已经安装[node](http://nodejs.cn/)（建议安装6.0+版本）
#### 克隆项目
    git clone https://github.com/minooo/React-Study.git
    
#### 进入目录（比如step-01)
    cd step-01
    
#### 安装依赖
    npm install
    
#### 启动开发模式（运行 npm run build，即可将项目打包）
    npm start
    
#### 启动就绪后，打开浏览器，输入 http://localhost:3000/ ，看到惊喜了吗？



## 开发交流
如果你在学习本项目遇到问题，请加群交流： [419922267](http://jq.qq.com/?_wv=1027&k=2FnzuGM)

# License
MIT

    
