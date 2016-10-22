import React, { Component } from 'react'
import styles from './index.scss'

const Timer = () => {
  return (
    <div className="pall">
      <p className="font-40">00:00(stoped)</p>
      <button className={styles.btn}>重置</button>
      <button className={styles.btn}>开始</button>
      <button className={styles.btn}>停止</button>
    </div>
  )
}

export default Timer