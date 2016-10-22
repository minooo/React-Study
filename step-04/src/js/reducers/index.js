import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import showCongratulation from './showCongratulation'
import counterAsync from './counterAsync'
import timer from './timer'

const rootReducer = combineReducers({
  counter,
  counterAsync,
  todos,
  showCongratulation,
  timer
});

export default rootReducer;
