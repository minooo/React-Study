import React from 'react'
import { Button } from 'antd-mobile'

const Counter = ({counter, increment, decrement, incrementIfOdd, incrementAsync}) => {
  return (
    <p>
      点击: {counter} 次.
      {' '}
      <Button onClick={increment}>+</Button>
      {' '}
      <Button onClick={decrement}>-</Button>
      {' '}
      <Button onClick={incrementIfOdd}>如果是偶数就是加1</Button>
      {' '}
      <Button onClick={incrementAsync}>点击后1秒后加1</Button>
    </p>
  )
}

export default  Counter