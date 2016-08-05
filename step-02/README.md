# step-02 目前已完成，你可以完整运行
step-02 是在 step-01 的基础上开发的  
step-02 添加了 样式，字形，图片，等加载器配置。  
注意，虽然都是基础配置，但是本项目涵盖东西较多，所以要有耐心:wink:

## [DEMO](https://github.com/minooo/test/blob/master/step-02-demo.gif?raw=true)
点击上方DEMO预览

### 关于本项目的一些说明
- 样式分为公有样式和私有样式，前者位于styles文件夹内，后者位于每一个组件文件夹内，  
    - 公有样式我这里主要包含六部分：  
    第一部分是 [normalize.scss](https://github.com/necolas/normalize.css), 这是CSS的基础设置。  
    第二部分是 `app.scss` ,这是我们根据项目需要而量身打造的通用样式，比如清除浮动，水平垂直居中，清除默认的样式等等。  
    第三部分是 `mixins.scss`,这是我们针对某些反复用到但是每次设置都会不同的样式需求而准备的。比如按钮这个经常用到的元素，  
    我们设置按钮的样式每次用到的相关属性几乎都是相同的，唯一的区别就是属性值的差异，所以专门为按钮做一个mixin很有必要。  
    第四部分是 `animations.scss`,根据需要设置，如果你项目需要大量应用动画的话。否则可以放到`app.scss`里面。
    第五部分是 `font.scss`,这是一个字形图标的样式，如今项目中引入字形图标真的是太out了。  
    第六部分，可以单独建立的文件夹，取名 `plugins`,没错，开发中我们不可避免的要引用各种插件甚至是库，它们往往自带  
    样式文件需要额外引入。  
    - 私有样式在本项目中与它对应的组件文件是严格的“一夫一妻制”，它们是一对一的关系。私有样式最大的特点就是，  
    在整个项目中，这个样式是唯一的，想要样式唯一的办法就是给它取一个独一无二的名字。本项目引用CSSModules技术，  
    可以把你的类“加工”，保证其成为独一无二的类名。所以你也不用担心你给出的类名是否唯一。比如你可以放心使用  
    `tip`, `title`, `nav`, `left`等等，这类“稀有”类名，在不同的组件样式文件中大胆的复用吧，不会有任何问题。
    - 为了在写组件样式中，公有样式和私有样式不会混淆，本项目经过相关配置，公样式只能写在 `className`中，  
    私有样式只能写在 `styleName`中，并且为了更好的管理样式，`className`中的公有样式可以写多个，而 `styleName`  
    中的样式只能写一个。私有样式，可以通过 `composes` 实现复用。示例如下:  
    
    ```js
    // index.scss
    .root {
      list-style:none;
      display: inline-block;
    }
    
    .common {
      display: inline-block;
      padding: 10px 20px;
      cursor:pointer;
      transition:0.3s;
      &:hover {
        background-color:#beecea ;
      }
    }
    
    .normal {
      composes: common;
      background-color:#eee;
      color:#7B8585;
    }
    
    .focused {
      composes: common;
      color:#fff;
      background-color:#41c7c2;
      &:hover {
        background-color:#41c7c2;
      }
    }
    
    // js
    import React, { Component } from 'react'
    import CSSModules from 'react-css-modules';
    import styles from './index.scss'
    
    class Tab extends Component {
      render() {
        const { items } = this.props;
        const { focused } = this.state;
    
        return (
          <div className="mb20 text-center">
            <ul styleName="root">
              {items.map((item, index) =>
                <li
                  key={index}
                  styleName="normal"
                >
                  {item}
                </li>
              )}
            </ul>
            <p className="pt20">当前选择是：{items[this.state.focused]}</p>
          </div>
        )
      }
    }
    
    export default CSSModules(Tab, styles);
    ```
- 关于字形图标，很多朋友都会使用这个库 [Font Awesome](http://fontawesome.io/), 我以前也经常用，但是它的最大的问题不能定制，只能去选择想要的图标  
    后来同事推荐了这个兼顾制作和供选择图标的网站，[icomoon](https://icomoon.io/#home)，具体使用教程自行百度吧，这是我推荐的一篇教程，[详解使用icomoon生成字体图标的方法并应用](http://blog.csdn.net/u013938465/article/details/50680468)  
    这个网站的图标分为免费和收费的，一般来讲，上面的免费图标足够使用了，之所以用它就是用它允许你上传自己制作的SVG（设计师同学使用AI可以把自己画的图标直接生成SVG文件）生成本地字形文件。    
- 项目开发需要一个良好的开发规范，向大家强烈推荐：   
  [React编码规范-英文原版](https://github.com/airbnb/javascript/tree/master/react)  
  如果你实在不想看英文，这里是[中文版本](https://zhuanlan.zhihu.com/p/20616464?refer=FrontendMagazine)  
  step-02 编码规范就是以此为标准写的。
- 此项目应用了rem布局，具体可参考我之前写的[手机端页面自适应解决方案—rem布局](https://segmentfault.com/a/1190000004705207)


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
[rucksack语法](https://simplaio.github.io/rucksack/)，[precss语法，类似于scss](https://github.com/jonathantneal/precss),[cssModules语法](https://css-modules.github.io/webpack-demo/)语法很简单，不难，别被吓倒了。  
然而技术是激进的，很多IDE并没有缓过神儿来支持这些新兴的css语法，比如我的用webstorm（目前版本 2016.2）就不支持，  
对这些新兴语法直接红色错误标注，但是插件运行良好，仅仅是有错误提示而已，希望后续版本能够支持这些语法，  
如果你实在讨厌看到这些红色错误标注，我是说在webstorm中，你可以按 `Ctrl + Alt + Shift + H`,在弹出  
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
安装：`npm install json-loader --save-dev`

---

####[url-loader](https://github.com/webpack/url-loader) [必需]
> 这个加载器的工作方式很像file-loader。只是当文件大小小于限制值时，它可以返回一个Data Url。限制值可以作为查询参数传入。默认不限制。  
安装：`npm install url-loader --save-dev`

---

####[file-loader](https://github.com/webpack/file-loader) [必需]
> 修改文件名，放在输出目录下，并返其对应的 url .默认修改后的文件名，是文件内容的MD5哈希串。你也可以自定义文件名。  
安装：`npm install file-loader --save-dev`

---

####[react-addons-css-transition-group](https://facebook.github.io/react/docs/animation.html#getting-started) [如果你需要来点React动画]
> ReactCSSTransitionGroup是基于ReactTransitionGroup的，在React组件进入或者离开DOM的时候，它是一种简单地执行CSS过渡和动画的方式。  
安装：`npm install react-addons-css-transition-group --save-dev`

---

