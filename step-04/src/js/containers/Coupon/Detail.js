import React, { Component } from 'react'
import { ScrollBox } from 'app/components'

const options = {
  mouseWheel: true,
  scrollbars: true,
  scrollX: true,
  scrollY: true
}

export default class Detail extends Component {
  render() {
    return (
      <div className="box">
        <ScrollBox options={options}>
          <div style={{width:'2200px', height:'100px', background: 'red'}}>
            1223414
          </div>
        </ScrollBox>
      </div>
    )
  }
}
