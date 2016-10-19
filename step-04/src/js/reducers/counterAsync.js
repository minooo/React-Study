import {
  INCREMENT_ASYNC,
  COUNT_DOWN,
  ASYNC_OVER
} from '../actions/actionsTypes'

const init = {
  asyncBool: false,
  asyncCountDown: 3
}

export default function counterAsync(state = init, action) {
  switch (action.type) {
    case INCREMENT_ASYNC:
      return {
        ...state,
        asyncBool: true,
      }
    case COUNT_DOWN:
      return {
        ...state,
        asyncCountDown: state.asyncCountDown -1
      }
    case ASYNC_OVER:
      return {
        ...state,
        asyncBool: false,
        asyncCountDown: 3
      }
    default:
      return state;
  }
}