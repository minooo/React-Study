import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Nav, Counter } from '../../components'
import * as CounterActions from '../../actions/CounterActions'

class Coupon extends Component {
  render() {
    const { counter, dispatch, asyncBool, asyncCountDown } = this.props
    return (
      <div className="box">
        <Counter
          counter={counter}
          asyncBool={asyncBool}
          asyncCountDown={asyncCountDown}
          {...bindActionCreators(CounterActions, dispatch)}
        />
        <Nav />
      </div>
    )
  }
}

function select(state) {
  return {
    counter: state.counter,
    asyncBool: state.counterAsync.asyncBool,
    asyncCountDown: state.counterAsync.asyncCountDown
  }
}

export default connect(select)(Coupon)
