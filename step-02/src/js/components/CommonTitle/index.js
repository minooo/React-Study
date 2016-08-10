import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.scss'

const CommonTitle = ({title}) => {
  return (
    <div>
      <h1 className="font-size-24" styleName="toRed">{title}</h1>
      <hr/>
    </div>
  )
};

export default CSSModules(CommonTitle, styles);