import React from 'react'
import styles from './index.scss'

const Counter = ({counter, increment, decrement, incrementIfOdd, incrementAsync}) => {
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
            onClick={incrementAsync}
            className={styles.async}
            {...1?{disabled:true}:{}}
          >
            1秒后+1
          </button>
        </div>
      </div>
    </div>
  )
}

export default  Counter