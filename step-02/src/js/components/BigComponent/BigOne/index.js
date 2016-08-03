import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.scss'

const BigOne = () => {
  return (
    <div>
      <h2 styleName="title">这是一张大图(该图片&gt;10k,图片保持原样)</h2>
      <div styleName="bigImg"></div>
    </div>
  )
};

export default CSSModules(BigOne, styles);
