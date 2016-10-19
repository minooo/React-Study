import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import showCongratulation from './showCongratulation'
import counterAsync from './counterAsync'

const rootReducer = combineReducers({
  counter,
  counterAsync,
  todos,
  showCongratulation
});

export default rootReducer;
