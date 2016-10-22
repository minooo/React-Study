import React, { Component } from 'react'
import { Timer } from '../../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { NavBar, Icon } from 'antd-mobile'
class Detail extends Component {
  render() {
    return (
      <div className="box">
        <NavBar mode="light" onLeftClick={() => {history.go(-1)}}>好店详情</NavBar>

        <Timer />
      </div>
    )
  }
}

export default  Detail