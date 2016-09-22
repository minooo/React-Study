import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
export default class Detail extends Component {

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      mode: 'banner'
    };
    return (
      <div className="box">
        <NavBar mode="light" leftContent={[<Icon key="0"  />]} onLeftClick={() => {history.go(-1)}}>好店详情</NavBar>

        <div className="font-34">空落落的什么也没有 - -！</div>
      </div>
    )
  }
}
