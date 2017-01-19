# step-03 目前已完成，你可以完整运行
step-03 是在 step-02 的基础上开发的  
step-03 主要围绕添加 react-router 进行配置，以及在react移动端开发中，强烈推荐使用[antd-mobile](http://mobile.ant.design/docs/react/introduce)  
这个特别符合我国国情的react组件库。
本模板延续组件化的思想，以及样式的模块化（cssModules), 并以真实项目实践写了几个简单的组件，包括底部导航，好店列表，以及下拉菜单等。  
目的就是展示下，在真实项目中，组件化的思想是如何实践的。

## [DEMO](https://raw.githubusercontent.com/minooo/test/master/step-03-demo.gif)
点击上方DEMO预览

## 高清方案布局(step-03以及step-04已采用此方案)
```
 // flex模式
<script>!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);
flex(100, 1);</script>
```

> 这是[ant-design-mobile](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8%E9%AB%98%E6%B8%85%E6%96%B9%E6%A1%88%E5%AE%9E%E8%B7%B5)的高清方案布局代码，所谓高清方案就是根据设备屏幕的`DPR`（设备像素比，又称`DPPX`，比如dpr=2时，表示1个CSS像素由4个物理像素点组成）
动态设置 html 的`font-size`, 同时根据设备`DPR`调整页面的缩放值，进而达到高清效果。

### 有何优势?
1. 引用简单，布局简便
1. 根据设备屏幕的`DPR`,自动设置最合适的高清缩放。
1. 保证了不同设备下视觉体验的一致性。
1. 有效解决移动端真实1px问题

### 如何使用?
1. 只需要把上面的js代码放到head里面就行了。
2. 将设计师给你的效果图（效果图的宽度一般情况下只有三种，640px, 750px, 1442px，  
如果你的效果图属于前两种，那就直接按照效果图上标注的尺寸来布局，  
如果属于第三种，你可能需要把你的效果图宽度等比例缩放至812之后再按照上面标注的尺寸来布局  
第三种之所以这样，是因为此宽度是按照 Iphone 6 Plus 的尺寸给的，此设备的css宽度为414，dpr为3，  
所以它的物理像素宽度为 414 * 3 = 1242。而我们的这个高清布局代码默认 1rem=100px，设备对应的 dpr=2,  
这也就是为什么宽度为640，750的效果图为什么可以直接在上面量取尺寸的原因，  
就是因为640是按照 Iphone 5 的尺寸来的（设备的css宽度为320，dpr=2, 320 * 2 = 640)  
而750是按照 Iphone 6 的尺寸来的（设备的css 宽度为 375，dpr=2, 375 * 2 = 750)  
）  
然后量取效果图上的元素尺寸，用rem做单位进行布局  
比如你量取某个元素宽35px，样式写为`width: 0.35rem`。

对阿里高清方案如果不是很理解的朋友，[可以看看我这篇文章](http://www.jianshu.com/p/985d26b40199#comment-7294037)
3. 对于图片的尺寸，如果是全屏图片，请保证其样式拥有以下设置
```CSS
.yourImg {
    display: block;
    width: 100%
}
```
4. 本人心得，关于图片，比如640px宽度的效果图下，你量取某图片宽120px, 高80px, 它的样式应该是`width: 1.2rem; height: 0.8rem` 没问题，但是图片实际尺寸应该是此基础上的1.5倍，即图片应该宽180px, 高120px，这是因为现在很多设备的屏幕的`DPR`达到了3的水平。如此，图片在次屏幕上会“高清显示”。 

## 本模板包含step-02用到的所有包，下面将介绍 **额外** 添加的包

#### [react-router](https://github.com/reactjs/react-router) [必需]
> `React Router` 一个针对 `React` 而设计的路由解决方案、可以友好的帮你解决 `React components` 到 `URl` 之间的同步映射关系。  
推荐教程 [React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html)  
安装：`npm install react-router --save`
  
---

#### [antd-mobile](http://mobile.ant.design/) [强烈推荐]
> antd的移动端版本  
  安装：`npm install antd-mobile --save`
  
---

#### [rc-form](http://mobile.ant.design/) [搭配antd-mobile必需]
> antd-mobile 表单组件需要  
  安装：`npm install rc-form --save-dev`
  
---

#### [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) [搭配antd-mobile必需]
> Modular antd build plugin for babel，让antd-mobile 中模块组件的引入实现**按需加载**  
  安装：`npm install babel-plugin-import --save-dev`
  
---

#### [postcss-pxtorem](https://npm.taobao.org/package/postcss-pxtorem) [antd-mobile高清方案需要]
> 顾名思义，就是将px转化为rem的小插件，实际生产中，我们完全可以直接写rem,这个小插件就是为antd-mobile 的样式服务的。  
使用方法参照[高清方案](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8%E9%AB%98%E6%B8%85%E6%96%B9%E6%A1%88%E5%AE%9E%E8%B7%B5),另外特别指出，在此基础上还需在webpack.config.js上配置
```
{
    test: /\.css$/,
    include: /node_modules/,
    loader: 'style!css!postcss'
}
```
安装：`npm install babel-plugin-antd --save-dev`
  
---
