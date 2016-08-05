import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.scss'

const BigOne = () => {
  return (
    <div>
      <h2 styleName="title" className="font-size-16 mt10">
        这是一张大图(该图片&gt;10k,图片不转代码)
      </h2>
      <div styleName="bigImg"></div>
    </div>
  )
};

export default CSSModules(BigOne, styles);
