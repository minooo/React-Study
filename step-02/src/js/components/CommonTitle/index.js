import React from 'react'
import styles from './index.scss'

const CommonTitle = ({title}) => {
  return (
    <div>
      <h1 className={"font-size-24 " + styles.toRed}>{title}</h1>
      <hr/>
    </div>
  )
};

export default CommonTitle;