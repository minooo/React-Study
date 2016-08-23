import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Tour extends Component {
  render() {
    return (
      <div className="pageAnimate">
        404!页面没有找到，请<Link to="/" className="font-size-16 main-color">返回首页</Link>
      </div>
    )
  }
}