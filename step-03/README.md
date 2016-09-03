# step-03 目前开发中...
step-03 主要围绕添加 react-router 进行配置


## 本模板包含step-02用到的所有包，下面将介绍 **额外** 添加的包

#### [react-router](https://github.com/reactjs/react-router) [必需]
> `React Router` 一个针对 `React` 而设计的路由解决方案、可以友好的帮你解决 `React components` 到 `URl` 之间的同步映射关系。  
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

#### [babel-plugin-antd](https://npm.taobao.org/package/babel-plugin-antd) [搭配antd-mobile必需]
> Modular antd build plugin for babel.  
  安装：`npm install babel-plugin-antd --save-dev`
  
---
<<<<<<< HEAD
=======

#### 高清方案实践
```
 // flex模式
<script>!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);
flex(100, 1);</script>
```


