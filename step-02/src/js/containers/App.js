import React, { Component } from 'react'
import {
  BigComponent,
  CommonTitle,
  CssTest,
  Tab
} from '../components'

export default class App extends Component {
  state = {
    items: ['webpack','react','babel','npm','react-router']
  };
  render() {
    const {items} = this.state;

    return (
      <div className="box">
        <CommonTitle title="Tab示例" />
        <Tab items={items} />
        <CommonTitle title="一个简单的按钮mixin示例" />
        <CssTest />
        <CommonTitle title="图片转换" />
        <BigComponent />
      </div>
    )
  }
}
