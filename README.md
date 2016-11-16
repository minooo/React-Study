> [react.js](https://github.com/facebook/react) 是一个构建用户界面的javascript库，它因**单向数据绑定**和**虚拟 DOM** 两大特点在前端界大放异彩。  
因为它解决了当下网页性能陷入的瓶颈————由于直接操作DOM导致页面性能损失很大，而虚拟DOM避免了直接操作DOM(Jquery 是一个典型的操作DOM的库，所以 React 开发中，我们尽量不要使用Jquery)。再加上   React 单向数据绑定的特点使得业务逻辑更加清晰可控。  
另外，`react.js` 是大名鼎鼎的 Facebook 一手打造维护，目前其在 github 上已有超过5万的 Star 量。  
同时，react 社区也异常活跃，各种基于 React 的非常优秀的库和框架层出不穷，进而推动了 react 的流行和壮大，围绕 React 为核心的生态圈已悄然成型。

## 认识React生态圈

用阮一峰老师的话说就是： **React 已不是一个库，也不是一个框架，而是一个庞大的体系。想要发挥它的威力，整个技术栈都要配合它改造。你要学习一整套解决方案，从后端到前端，都是全新的做法。** 时至今日，围绕以React为核心的技术栈也日益成型，它主要包含：

- React,
- npm
- js打包工具（如：webpack）
- ES6
- Routing
- Redux

**你不需要把这些都学完才去使用 React. 只需要在你遇到问题需要解决的时候, 才进入相关的学习。**

## 学习 React 生态圈
学习 React 生态圈是一个综合应用React技术栈的过程，这也是最接近我们实际开发运用React的情境，为此，笔者特地根据以往React开发经验，精心制作了[React-Study](https://github.com/minooo/React-Study)系列React技术栈学习模板，以实际项目开发情境为目标，从最简单的hello,world开始，通过逐步升级配置，来学习React生态圈并最终应用到公司项目中。

React-Study 系列模板主要包含以下四部分

- [step-01](https://github.com/minooo/React-Study/tree/master/step-01)（已完成）
这部分就是基础的hello,world模板，前面说了，这系列模板是以实际项目开发情境为目标而构建的，虽说是  hello,world的示例，但是它综合应用了 React+webpack+es2015+npm ，并且分为开发模式（开启了热替换和sourcemap）和产品模式（也就是打包，开启了代码压缩等优化）

- [step-02](https://github.com/minooo/React-Study/tree/master/step-02)（已完成）
step-02 是在 step-01的基础上添加额外配置完成的，这一部分添加了 样式，字形，图片，等加载器配置。并初步展示了在项目实践中，React技术栈的一个合理的目录结构应该是怎样的。由于应用了CSSModules以及相关的辅助插件，CSS的语法更加便利简洁，这些在项目的组件样式中都有体现。同时，也展示了在ES6下，React组件相关写法，以及标准语法的规范的推荐。总之，React带你走进组件化的美好

- [step-03](https://github.com/minooo/React-Study/tree/master/step-03)（已完成）
step-03 是在 step-02 的基础上开发的 step-03 主要围绕添加 react-router 进行配置，以及在react移动端开发中，强烈推荐使用antd-mobile 这个特别符合我国国情的react组件库。本模板延续组件化的思想，以及样式的模块化（cssModules), 并以真实项目实践写了几个简单的组件，包括底部导航，好店列表，以及下拉菜单等。 目的就是展示下，在真实项目中，组件化的思想是如何实践的。

- step-04（开发中）
同理，step-04 是在 step-03 的基础上添加额外配置完成，目前仍处于开发中，这部分主要添加 [redux](https://github.com/reactjs/redux)。推荐教程 [redux-tutorial 使用教程](https://github.com/react-guide/redux-tutorial-cn/blob/master/00_introduction.js) [redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

## 启动React生态圈

##### 克隆项目
    git clone https://github.com/minooo/React-Study.git
    
##### 进入目录（比如step-01)
    cd step-01
    
##### 安装依赖
    npm install
    
##### 启动开发模式（运行 npm run build，即可将项目打包）
    npm start
    
##### 启动就绪后，打开浏览器，输入 http://localhost:3000/ ，看到惊喜了吗？

## 常见问题说明。（2016/10/19）

- 请保证电脑安装的 [node](http://nodejs.cn/) 版本在 **6.0以上** ，如果你“不幸”安装了4.0版本，  
  请先将其卸载，再安装6.0+版本
  
- 很多新手朋友可能事先跟着react官网实例做了一些练习，用的都是 es5 的语法。  
  而本项目代码采用的都是 es6 的语法，这也是react官网推荐的。如果你对es6语法不太熟悉  
  可以看下[React es5---es6 写法对照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)  
  同时也建议你花[30分钟，快速了解ES6语法](https://segmentfault.com/a/1190000004365693)
  当然，本项目所有组件示例也可以当作你学习es6写法的参考。
  
- 如果你有使用webstorm作为你的IDE，初次运行本项目，软件可能会提示你 `Add watcher` ，  
  由于本项目已配置好了一整套的编译流程，所以不要此类协助，直接忽略取消即可；另外由于  
  项目代码用的都是JSX语法，webstorm 可能默认的解析js语法是es5，  
  所以此时你会看到文件都是“一片红”错误标注，如下改下解析设置就行了：  
  `File` -> `Settings` -> `Languages & Frameworks` -> `JavaScript`   
  选择右侧面板中的下拉框，将选项 `JavaScript languaga version` 的值改为 `React JSX` 即可
  
- 如果你在学习本项目遇到问题，请加群交流： [419922267](http://jq.qq.com/?_wv=1027&k=2FnzuGM)

# License
MIT

    
