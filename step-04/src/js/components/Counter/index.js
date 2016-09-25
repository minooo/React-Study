import React from 'react'
import { Button } from 'antd-mobile'

export default class Counter extends React.Component {
  incrementIfOdd = () => {
    if (this.props.counter % 2 == 0) {
      this.props.increment()
    }
  }

  incrementAsync = () => {
    setTimeout(() => this.props.increment(), 1000)
  }

  render() {
    const { counter, increment, decrement } = this.props
    return (
      <p>
        点击: {counter} 次.
        {' '}
        <Button onClick={increment}>+</Button>
        {' '}
        <Button onClick={decrement}>-</Button>
        {' '}
        <Button onClick={this.incrementIfOdd}>如果是偶数就是加1</Button>
        {' '}
        <Button onClick={this.incrementAsync}>点击后1秒后加1</Button>
      </p>
    )
  }
}
