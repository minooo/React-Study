## 需要哪些包

####[react.js](https://facebook.github.io/react/index.html) [必需]
> React是用来构建用户界面的js库，属于view层。
  它有两大特点：1，单向数据绑定；2，虚拟DOM
  安装：`npm install --save react`
  
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