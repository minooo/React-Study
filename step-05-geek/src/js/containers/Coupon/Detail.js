import React, { Component } from 'react'
import classnames from 'classnames'
import { ScrollBox } from 'app/components'

import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'

const options = {
  click: true,
  scrollX: true
}

const optionsList = {
  click: true,
  scrollY: true,
  scrollbars: true,
}

export default class Detail extends Component {
  state = {
    focus: 0,
    date: [
      {week:"周一", date: '1'},
      {week:"周一", date: '2'},
      {week:"周一", date: '3'},
      {week:"周一", date: '4'},
      {week:"周一", date: '5'},
      {week:"周一", date: '6'},
      {week:"周一", date: '7'},
      {week:"周一", date: '8'},
      {week:"周一", date: '9'},
      {week:"周一", date: '10'},
      {week:"周一", date: '11'},
    ]
  }

  onClick = (i) => {
    this.setState({focus: i})
    this.refs.iScroll.withIScroll((iScroll) => {
      iScroll.scrollToElement(this.refs[`list${i}`])
    })
  }
  render() {
    const { focus, date } = this.state

    let i = 0, len = 50, listOfLi = []

    for(i; i < len; i++) {
      listOfLi.push(<li ref={"list" + i} key={i} className="ptb20 center-center border-bottom">Row {i+1}</li>)
    }

    return (
      <div className="box">
        <ScrollBox
          options={options}
          style={{
            position: 'relative',
            width:'100%',
            height:'2rem',
            background:'#fff',
            overflow: 'hidden'
          }}
        >
          <div className="ver-center ptb20 bg-white scroll-wrap">
            {
              date.map((item, index) =>
                <div key={index}  className="center-center-column plr20">
                  <div className="font-32 mb20 color4 mb10">{item.week}</div>
                  <div
                    className={classnames({
                      "circle center-center font-34":true,
                      "bg-main color-white": index === focus
                    })}
                    style={{width:'0.8rem', height:'0.8rem'}}
                    value={index}
                    onClick={this.onClick.bind(null, index)}
                  >
                    {item.date}
                  </div>
                </div>
              )
            }
          </div>
        </ScrollBox>

        <ReactIScroll
          ref="iScroll"
          iScroll={iScroll}
          options={optionsList}
          style={{
            position: 'absolute',
            zIndex:15,
            top: '2.2rem',
            bottom: 0,
            width:'100%',
            maxWidth: '10rem',
            background:'#fff',
            overflow: 'hidden'
          }}
        >
          <ul>
            {listOfLi}
          </ul>
        </ReactIScroll>
      </div>
    )
  }
}
