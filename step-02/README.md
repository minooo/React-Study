# step-02 目前开发中...
step-02 是在 step-01 的基础上开发的  
step-02 添加了 样式，图标，图片，等加载器，样式使用目前最流行的 CssModules  
本版本将引入一个目录结构



## 本模板包含step-01用到的所有包，下面将介绍 额外 添加的包

####[css-loader](https://npm.taobao.org/package/css-loader) [必需]
> css-loader会遍历css文件，并将其处理。
  安装：`npm install css-loader --save-dev`
  
---

####[style-loader](https://npm.taobao.org/package/style-loader) [必需]
> style-loader会把所有的样式插入到你页面的style标签中。
  安装：`npm install style-loader --save-dev`
  
---

####[postcss-loader](https://npm.taobao.org/package/postcss) [强烈推荐]
> PostCSS是一个允许你使用各种JS插件来转换CSS的工具，这些插件可以优化你的CSS，     
并且支持变量，混合，内嵌图片，甚至转译下一代CSS！其中，PostCSS中的 [Autoprefixer] (https://github.com/postcss/autoprefixer)插件最驰名中外的。     
安装：`npm install postcss-loader --save-dev`
[PostCSS深入学习](http://www.w3cplus.com/PostCSS/postcss-deep-dive-what-you-need-to-know.html)
---

####[autoprefixer](https://npm.taobao.org/package/autoprefixer) [强烈推荐]
> 解析CSS并添加浏览器前缀，添加规则遵循[Can I Use](http://caniuse.com/)
安装：`npm install autoprefixer --save-dev`
[PostCSS深入学习](http://www.w3cplus.com/PostCSS/postcss-deep-dive-what-you-need-to-know.html)
---


# License

MIT
