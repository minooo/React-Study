import React from 'react'
import styles from './index.scss'

const BigTwo = () => {
  return (
    <div>
      <h2 className={"font-size-16 mt10 " + styles.title}>这是一张小图(该图片&lt;10k,图片转换成代码，F12可查看)</h2>
      <div className={styles.smallImg}></div>
    </div>
  )
}

export default BigTwo
