import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'

export default class Swipe extends Component {
  render() {
    const { data, hackHeight, ...rest } = this.props
    /*如果接收到一张图片就单纯展示，如果是多张，就用Carousel组件展示*/
    let list
    if (data.length === 1) {
      list =
        <a href={data[0].link} className="block">
          <img
            src={data[0].thumb}
            className={"img-responsive"}
          />
        </a>
    } else {
      list =
        <Carousel
          {...rest}
        >
          {
            data.map((item,index) =>
              <a key={index} href={item.link} className="block">
                <img
                  src={item.thumb}
                  className={"img-responsive " + hackHeight}
                />
              </a>
            )
          }
        </Carousel>
    }
    return (
      <div>
        {list}
      </div>
    )
  }
}