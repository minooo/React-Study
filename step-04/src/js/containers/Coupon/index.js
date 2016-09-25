import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Nav, Counter } from '../../components'

import * as CounterActions from '../../actions/CounterActions'


class Coupon extends Component {
  render() {
    const { counter, dispatch } = this.props
    return (
      <div>
        <h1>一个简单的redux小程序</h1>
        <Counter
          counter={counter}
          {...bindActionCreators(CounterActions, dispatch)}
        />
        <Nav />
      </div>
    )
  }
}

function select(state) {
  return {
    counter: state.counter
  }
}

export default connect(select)(Coupon)
