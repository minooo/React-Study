import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import showCongratulation from './showCongratulation'
import counterAsync from './counterAsync'
import timer from './timer'
import posts from './posts'

const rootReducer = combineReducers({
  counter,
  counterAsync,
  todos,
  showCongratulation,
  timer,
  posts
});

export default rootReducer;
