import React, { Component } from 'react'
import { ScrollBox } from 'app/components'

const options = {
  click:true,
  scrollX: true
}

export default class Detail extends Component {
  state = {
    date: [
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
      {week:"周一", date: '7'},
    ]
  }

  onClick = (i) => {
    console.log(i)
  }
  render() {
    const { date } = this.state
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
          <div className="ver-center ptb20 bg-white">
            {
              date.map((item, index) =>
                <div key={index}  className="center-center-column plr20">
                  <div className="font-32 mb20 color4">{item.week}</div>
                  <div
                    className="circle center-center font-34"
                    style={{width:'0.8rem', height:'0.8rem', backgroundColor:'red'}}
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
      </div>
    )
  }
}
