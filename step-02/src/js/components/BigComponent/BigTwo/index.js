import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.scss'

const BigTwo = () => {
  return (
    <div>
      <h2 styleName="title">这是一张小图(该图片&lt;10k,图片转换成代码，F12可查看)</h2>
      <div styleName="smallImg"></div>
    </div>
  )
};

export default CSSModules(BigTwo, styles);
