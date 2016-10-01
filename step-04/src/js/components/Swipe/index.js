import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'

export default class Swipe extends Component {
  render() {
    const { data, ...rest } = this.props

    let list
    if (data.length === 1) {
      list = (
        <div>
          <a href={data[0].link} className="block">
            <img src={data[0].thumb} className="img-responsive"/>
          </a>
        </div>
      )
    } else {
      list = (
        data.map((item,index) =>
          <div key={index}>
            <a href={item.link} className="block">
              <img src={item.thumb} className="img-responsive"/>
            </a>
          </div>)
      )
    }
    return (
      <Carousel
        autoplay={data.length>1}
        dots={data.length>1}
        {...rest}
      >
        {list}
      </Carousel>
    )
  }
}