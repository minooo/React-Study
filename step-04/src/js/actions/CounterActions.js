import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_ASYNC
} from './actionsTypes';

export const increment = () => ({ type: INCREMENT_COUNTER })

export const decrement = () => ({ type: DECREMENT_COUNTER })

export const onIncrementAsync = () => ({ type: INCREMENT_ASYNC })