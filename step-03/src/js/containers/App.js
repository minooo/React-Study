/*import React, { Component } from 'react'
import {
  CommonTitle,
  CssTest,
  Tab,
  Animation
} from '../components'

export default class App extends Component {
  state = {
    items: ['webpack','react','babel','npm','react-router']
  };
  render() {
    const {items} = this.state;

    return (
      <div className="box">
        <CommonTitle title="一个简单的按钮mixin示例" />
        <CssTest />
        <CommonTitle title="Animation示例，点击列表删除" />
        <Animation />
        <CommonTitle title="Tab示例" />
        <Tab items={items} />
      </div>
    )
  }
}*/

import React,{ Component } from 'react';

export default class App extends Component {
  render() {
    const { children } =this.props;
    return children
  }
}