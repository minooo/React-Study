import React, { Component } from 'react'
import {
  BigComponent,
  CommonTitle,
  DataTest,
  CssTest
} from '../components'

export default class App extends Component {
  state = {
    myArray: [
      {name: '111'},
      {name: '222'},
      {name: '333'},
      {name: '444'}
    ]
  };
  render() {
    const {myArray} = this.state;
    return (
      <div>
        <CommonTitle title="CSS各种插件语法测试" />
        <CssTest />
        <CommonTitle title="数据测试，点击变色" />
        <DataTest myArray={myArray} />
        <CommonTitle title="图片转换测试" />
        <BigComponent />
      </div>
    )
  }
}
