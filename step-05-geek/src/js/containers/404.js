import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Tour extends Component {
  render() {
    return (
      <div className="center-center-column" style={{height: '100vh'}}>
        <span className="font-26">404!页面没有找到，请</span>
        <Link to="/" className="font-36 main-color">返回首页</Link>
      </div>
    )
  }
}