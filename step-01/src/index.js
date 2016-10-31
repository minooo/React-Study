import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(
  <App />,
  document.getElementById('app')
);

// 为了降低入门难度，以上配置精简了下，可以实现基本的 实时热更新
// 如果想实现更为高级的 无刷新局部替换 ，可以参考 step-02 以及之后的版本
// 当然你可以根据实际需要，选择合适的热替换方案
