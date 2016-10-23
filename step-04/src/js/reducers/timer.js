import { START, STOP, RESET, TIMER} from '../actions/actionsTypes'

const init = {
  seconds: 4,
  status: 'Stopped'
}

export default function timer(state=init, action) {
  switch (action.type) {
    case START:
      return { ...state, status: 'Running' }
    case STOP:
      return { ...state, status: 'Stopped' }
    case RESET:
      return { ...state, seconds: 0 }
    case TIMER:
      return { ...state, seconds: state.seconds + 1 }
    default:
      return state
  }
}