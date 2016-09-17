import React,{ Component } from 'react'
import {WhiteSpace, Carousel } from 'antd-mobile'
import { Header, Nav, FastNav, Title, ShopList } from '../components'

class Home extends Component {
  state = {
    dark: false,
    fastNav: [
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/140x140",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/140x140",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/140x140",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/140x140",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/140x140",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/140x140",
        title: "大牌抢购"
      }
    ]
  }
  
  render() {
    const settings = {
      dots: true,
      autoplay: 1,
      autoplaySpeed: 3000,
      infinite: true,
      mode: 'banner',
      initialSlide: this.state.current,
      afterChange: this.slideTo,
      lazyLoad: true
    }
    const { fastNav } = this.state

    return (
      <div>
        <Header />
        <Carousel {...settings}>
          <div className="item">
            <img src="http://temp.im/960x390/444/fff" className="homeImg" alt=""/>
          </div>
          <div className="item">
            <img src="http://temp.im/960x390/444/fff" className="homeImg" alt=""/>
          </div>
          <div className="item">
            <img src="http://temp.im/960x390/444/fff" className="homeImg" alt=""/>
          </div>
          <div className="item">
            <img src="http://temp.im/960x390/444/fff" className="homeImg" alt=""/>
          </div>
          </Carousel>
        <div className="bg-white hor pt30">
          {fastNav.map((item, index) =>
            <FastNav key={index} data={item}/>
          )}
        </div>
        <Title text="精品好店" linkName="查看全部" path="/shop" />
        <ShopList/>
        <Nav />
      </div>
    )
  }
}

export default Home