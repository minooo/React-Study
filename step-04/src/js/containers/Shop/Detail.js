import React, { Component } from 'react'
import { Timer } from '../../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as TimerActions from '../../actions/TimerActions'

import { NavBar } from 'antd-mobile'
class Detail extends Component {

  componentDidMount() {
    console.log(this.props.location)
  }

  toHome = () => {
    browserHistory.push('/shop')
  }

  toPrevious = () => {
    browserHistory.goBack()
  }

  render() {
    const { state, actions } = this.props
    return (
      <div className="box">
        <NavBar
          mode="light"
          onLeftClick={this.props.location.action==="PUSH"?this.toPrevious:this.toHome}
        >
          好店详情
        </NavBar>
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
