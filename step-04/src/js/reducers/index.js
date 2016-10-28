import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import showCongratulation from './showCongratulation'
import counterAsync from './counterAsync'
import timer from './timer'
import post from './post'

const rootReducer = combineReducers({
  counter,
  counterAsync,
  todos,
  showCongratulation,
  timer,
  post
});

export default rootReducer;
