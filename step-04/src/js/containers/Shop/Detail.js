import React, { Component } from 'react'
import { Timer } from '../../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TimerActions from '../../actions/TimerActions'

import { NavBar } from 'antd-mobile'
class Detail extends Component {
  render() {
    const { state, actions } = this.props
    return (
      <div className="box">
        <NavBar mode="light" onLeftClick={() => {history.go(-1)}}>好店详情</NavBar>
        <Timer {...state} {...actions} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.timer
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TimerActions, dispatch)
})

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)