import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.scss'

class CssTest extends Component {
  render() {
    return (
      <div className="mb20">
        <button styleName="btnTest" className="center-center mb5">
          <i className="i-shoucang40 font-size-24 pr5" />button标签按钮带图标
        </button>
        <button styleName="btnTest" className="text-overflow-1 block mb5">
          button标签按钮
        </button>
        <button styleName="btnTest" className="text-overflow-1 block mb20">
          button标签按钮测试字符长度很长很长很长很长很长很长很长很长很长
        </button>

        <a href="#" styleName="btnTest" className="center-center block mb5">
          <i className="i-shoucang40 main-color font-size-24 pr5" />a标签按钮带图标
        </a>
        <a href="#" styleName="btnTest" className="text-overflow-1 block mb5">
          a标签按钮
        </a>
        <a href="#" styleName="btnTest" className="text-overflow-1 block mb20">
          a标签按钮测试字符长度试字符长度试字符长度试字符长度试字符长度
        </a>

        <div styleName="btnTest" className="center-center mb5">
          <i className="i-shoucang40 main-color font-size-24 pr5" />div标签按钮带图标
        </div>
        <div styleName="btnTest" className="text-overflow-1 mb5">
          div标签按钮
        </div>
        <div styleName="btnTest" className="text-overflow-1">
          div标签按钮测试字符长度测试字符长度测试字符长度测试字符长度测试字符长符长
        </div>
      </div>
    )
  }
}

export default CSSModules(CssTest, styles);