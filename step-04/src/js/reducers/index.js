import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import showCongratulation from './showCongratulation'

const rootReducer = combineReducers({
  counter,
  todos,
  showCongratulation
});

export default rootReducer;
