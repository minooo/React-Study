import React,{ Component } from 'react'
import { Header, Nav, FastNav, Title, ShopList, Message, Swipe } from '../components'

class Home extends Component {
  state = {
    fastNav: [
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/94x94",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/94x94",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/94x94",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/94x94",
        title: "大牌抢购"
      },
      {
        link: "https://www.github.com",
        thumb: "http://temp.im/94x94",
        title: "大牌抢购"
      },
      {
        link: "/hello/",
        thumb: "http://temp.im/94x94",
        title: "大牌抢购"
      }
    ],
    shopLists: [
      {
        id: 1,
        thumb: 'http://temp.im/160x120/FF9500/000',
        label: '五折优惠',
        discount_scale: '8',
        title: '年年有鱼',
        caption: '本市最棒的烤鱼店',
        tag: '美食',
        distance: '2.5km',
        discount_text: '本店支持微信支付',
        discount_time: '周一到周五每天9:00-24:00'
      },{
        id: 2,
        thumb: 'http://temp.im/160x120/FF9500/000',
        label: '五折优惠',
        discount_scale: '9',
        title: '年年有鱼2',
        caption: '本市最棒的烤鱼店2',
        tag: '美食',
        distance: '12.5km',
        discount_text: '本店支持微信支付',
        discount_time: '周一到周五每天9:00-24:00'
      }
    ],
    messages: [
      {
        link: 'https://github.com/minooo',
        desc: 'React-Study step-1 开发完成'
      },{
        link: 'https://github.com/minooo',
        desc: 'React-Study step-2 开发完成'
      },{
        link: 'https://github.com/minooo',
        desc: 'React-Study step-3 开发完成, 如果很长很长如果很长很长如果很长很长如果很长很长'
      }

    ],
    data: [
      {
        link: 'https://github.com/minooo',
        thumb: 'http://temp.im/640x260/444/fff'
      },{
        link: 'https://github.com/minooo',
        thumb: 'http://temp.im/640x260/444/fff'
      },{
        link: 'https://github.com/minooo',
        thumb: 'http://temp.im/640x260/444/fff'
      }
    ]
  }

  render() {
    const settings = {
      infinite: true,
      autoplayInterval: 2000,
      cellSpacing: 30
    }

    const { fastNav, shopLists, messages, data } = this.state

    return (
      <div>
        <Header />
        {data && <Swipe data={data} {...settings}/>}
        <div className="bg-white hor pt30">
          {fastNav.map((item, index) =>
            <FastNav key={index} data={item}/>
          )}
        </div>
        <Message data={messages}/>
        <Title text="精品好店" linkName="查看全部" path="/shop" />
        <div className="plr20 bg-white">
          {shopLists.map(item =>
            <ShopList key={item.id} data={item} />
          )}
        </div>
        <Nav />
      </div>
    )
  }
}

export default Home