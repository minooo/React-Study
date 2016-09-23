# step-04 目前开发中...
step-04 是在 step-02 的基础上开发的  
step-04 主要围绕redux,进行构建，这也是 react-study 最后一个系列，请拭目以待！

## [DEMO](https://raw.githubusercontent.com/minooo/test/master/step-03-demo.gif)
点击上方DEMO预览

## 高清方案布局
```
 // flex模式
<script>!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);
flex(100, 1);</script>
```

> 这是[ant-design-mobile](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8%E9%AB%98%E6%B8%85%E6%96%B9%E6%A1%88%E5%AE%9E%E8%B7%B5)的高清方案布局代码，所谓高清方案就是根据设备屏幕的`DPR`（设备像素比，又称`DPPX`，比如dpr=2时，表示1个CSS像素由4个物理像素点组成）
动态设置 html 的`font-size`, 同时根据设备`DPR`调整页面的缩放值，进而达到高清效果。

## 本模板包含step-03用到的所有包，下面将介绍 **额外** 添加的包

#### [redux](https://github.com/reactjs/react-router) [必需]
> 1234
  安装：`npm install redux --save`
  
---

#### [react-redux](https://github.com/reactjs/react-router) [必需]
> 1234
  安装：`npm install react-redux --save`
  
---

