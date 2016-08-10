import React, { Component } from 'react'
import styles from './index.scss'

class CssTest extends Component {
  render() {
    return (
      <div className="mb20">
        <button  className={"center-center mb5 " + styles.btnTest} >
          <i className="i-shoucang40 font-size-24 pr5" />
          <span>button标签按钮带图</span>
        </button>
        <button className={"text-overflow-1 block mb5 " + styles.btnTest}>
          button标签按钮
        </button>
        <button className={"text-overflow-1 block mb20 " + styles.btnTest}>
          button标签按钮测试字符长度很长很长很长很长很长很长很长很长很长
        </button>

        <a href="#" className={"center-center block mb5 " + styles.btnTest}>
          <i className="i-shoucang40 main-color font-size-24 pr5" />a标签按钮带图标
        </a>
        <a href="#" className={"text-overflow-1 block mb5 " + styles.btnTest}>
          a标签按钮
        </a>
        <a href="#" className={"text-overflow-1 block mb20 " + styles.btnTest}>
          a标签按钮测试字符长度试字符长度试字符长度试字符长度试字符长度
        </a>
      </div>
    )
  }
}

export default CssTest
