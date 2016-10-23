import React from 'react'
import styles from './index.scss'

export default class Counter extends React.Component {

  incrementIfOdd = () => {
    if(this.props.counter %2 ===0) {
      this.props.increment()
    }
  }

  render() {
    const { counter, increment, decrement, onIncrementAsync, asyncBool, asyncCountDown } = this.props
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
              onClick={this.incrementIfOdd}
              className={styles.ifOdd}
            >
              如果是偶数+1
            </button>

            <button
              onClick={onIncrementAsync}
              className={styles.async}
              disabled={asyncBool}
            >
              {asyncCountDown}秒后+1
            </button>
          </div>
        </div>
      </div>
    )
  }
}
