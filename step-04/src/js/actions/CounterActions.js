import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from './actionsTypes';

export const increment = () => ({ type: INCREMENT_COUNTER })

export const decrement = () => ({ type: DECREMENT_COUNTER})

export const incrementIfOdd = () => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 !== 0) {
      return;
    }

    dispatch(increment());
  };
}