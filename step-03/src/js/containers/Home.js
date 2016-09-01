import React,{ Component } from 'react'
import {WhiteSpace, Carousel } from 'antd-mobile'
import { Header, Nav } from '../components'

class Home extends Component {
  state = {
    dark: false
  }
  
  render() {
    const settings = {
      dots: true,
      autoplay: 1,
      infinite: true,
      mode: 'banner',
      initialSlide: this.state.current,
      afterChange: this.slideTo,
    }
    return (
      <div>
        <Header />
        <WhiteSpace size="lg" />
          <Carousel {...settings}>
            <div className="item">
              <img src="http://temp.im/1242x520/4CD964/fff" alt=""/>
            </div>
            <div className="item">
              <img src="http://temp.im/1242x520/4CD964/fff" alt=""/>
            </div>
            <div className="item">
              <img src="http://temp.im/1242x520/4CD964/fff" alt=""/>
            </div>
          </Carousel>
        <WhiteSpace size="lg" />
        <Nav />
      </div>
    )
  }
}

export default Home