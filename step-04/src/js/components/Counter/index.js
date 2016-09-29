import React from 'react'
import styles from './index.scss'

export default class Counter extends React.Component {
  state = {
    isDisabled: false,
    countDown: 3000
  }

  tick = () => {
    if(this.state.countDown > 0) {
      this.setState({countDown: this.state.countDown - 1000})
    }else{
      this.setState({isDisabled: false, countDown: 3000})
      clearInterval(this.interval)
    }
  }

  asyncClick = () => {
    this.setState({isDisabled: true})
    setTimeout(this.props.increment, this.state.countDown)
    this.interval = setInterval(this.tick, 1000)
  }

  render() {
    const {counter, increment, decrement, incrementIfOdd} = this.props
    const { isDisabled, countDown } = this.state
    return (
      <div className={styles.root}>
        <div className={styles.wrap}>
          <h1 className={styles.counter}>{counter}</h1>
          <div className={styles.wrapBtns}>
            <button
              onClick={increment}
              className={styles.increment}
            >
              +
            </button>

            <button
              onClick={decrement}
              className={styles.decrement}
            >
              -
            </button>

            <button
              onClick={incrementIfOdd}
              className={styles.ifOdd}
            >
              如果是偶数+1
            </button>

            <button
              onClick={this.asyncClick}
              className={styles.async}
              {...isDisabled && {disabled:true}}
            >
              {countDown/1000}秒后+1
            </button>
          </div>
        </div>
      </div>
    )
  }
}
