# step-02 目前开发中...
step-02 是在 step-01 的基础上开发的  
step-02 添加了 样式，图标，图片，等加载器，样式使用目前最流行的 CssModules  
本版本将引入一个目录结构



## 本模板包含step-01用到的所有包，下面将介绍 **额外** 添加的包

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

####[precss](https://npm.taobao.org/package/precss) [强烈推荐]
> 这是PostCSS插件，允许你在CSS文件中使用sass那样的语法，比如变量啦，混合啦，条件语句啦  
安装：`npm install precss --save-dev`

---

####[postcss-scss](https://npm.taobao.org/package/postcss-scss) [推荐]
> 这是PostCSS插件，允许你使用scss的语法写样式，其实这个在precss中已经实现，但是捏，在  
css中写这些东西webstorm并不会报各种错误（虽然运行没问题），为了不看到那密密麻麻的红色标注错误  
所以用了这个模式，你可以把你的样式文件后缀改为 `.scss` 了，当然你也可以不用，不影响的，就是难看。
安装：`npm install postcss-scss --save-dev`

---

####[rucksack-css](https://simplaio.github.io/rucksack/) [强烈推荐]
> Rucksack 是一款有趣的CSS工具，让CSS的开发过程更加有趣了。  
Rucksack 是基于PostCSS构建的，模块化设计，没有冗余，运行起来飞快。  
由于它是基于PostCSS来构建的，所以它同其他的CSS处理工具都能很好的兼容  
对了，Rucksack 内置的有 autoprefixer。  所以不用单独下载这个[autoprefixer](https://npm.taobao.org/package/autoprefixer) 插件了  
关于autoprefixer的简单介绍：解析CSS并添加浏览器前缀，添加规则遵循[Can I Use](http://caniuse.com/)  
安装：`npm install rucksack-css --save-dev`  
备注：安装到此，我们的css的已经可以进行各种风骚的写法了，具体写法请参考  
[rucksack语法](http://simplaio.github.io/rucksack/docs/)，[precss语法，类似于scss](https://github.com/jonathantneal/precss),[cssModules语法](https://css-modules.github.io/webpack-demo/)语法很简单，不难，别被吓倒了。  
然而技术是激进的，很多IDE并没有缓过神儿来支持这些新兴的css语法，比如我的用webstorm（目前版本 2016.2）就不支持，  
对这些新兴语法直接红色错误标注，但是插件运行良好，仅仅是有错误提示而已，希望后续版本能够支持这些语法，  
如果你实在对这些讨厌看到这些红色错误标注，我是说在webstorm中，你可以按 `Ctrl + Alt + Shift + H`,在弹出  
的窗口中，在 Highlighting Level 选项中，将游标拉到最左侧，然后那些烦人的红色标注就消失了（其实就是忽略所有的错误。。）  
这是我自己的方式，简单粗暴。当然也有国外网友的方法，你[可以看下](https://youtrack.jetbrains.com/issue/WEB-16601)

---

####[react-css-modules](https://github.com/gajus/react-css-modules) [强烈推荐]
> 关于`react-css-modules`,这是我翻译他们官网的[译文](https://segmentfault.com/a/1190000004530909)。相关说明都在里面，这里不再赘述。  
安装：`npm install react-css-modules --save-dev`

---

####[classnames](https://github.com/JedWatson/classnames) [强烈推荐]
> classnames 是一个简单的 JavaScript 工具包用来有条件的将不同的 classNames 联合在一起。
安装：`npm install react-css-modules --save-dev`

---

####[json-loader](https://github.com/webpack/json-loader) [必需]
> webpack用来解析json文件的加载器。
安装：`npm install json-loader] --save-dev`

---

####[url-loader](https://github.com/webpack/url-loader) [必需]
> 这个加载器的工作方式很像file-loader。只是当文件大小小于限制值时，它可以返回一个Data Url。限制值可以作为查询参数传入。默认不限制。
安装：`npm install url-loader] --save-dev`

---

####[file-loader](https://github.com/webpack/file-loader) [必需]
> 修改文件名，放在输出目录下，并返其对应的 url .默认修改后的文件名，是文件内容的MD5哈希串。你也可以自定义文件名。
安装：`npm install file-loader] --save-dev`

---

