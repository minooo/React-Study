import { takeEvery, delay, takeLatest } from 'redux-saga'
import { put, call, take, fork, select } from 'redux-saga/effects'

import {
  INCREMENT_COUNTER,
  INCREMENT_ASYNC,
  ADD_TODO,
  SHOW_CONGRATULATION
} from '../actions/actionsTypes'

// 我们的干活的 Saga: 将执行 异步加一 。
function* incrementAsync() {
  yield call(delay, 3000)
  yield put({type: INCREMENT_COUNTER})
}

// 我们监视的 Saga: 每个调用 INCREMENT_ASYNC 的动作将触发 异步加一 的5毛特效。
function* watchIncrementAsync() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync)
}

/*function* watchAndLog() {
  yield takeEvery('*', function* logger(action){
    const state = yield select()

    console.log('action-minooo', action)
    console.log('state after-minooo', state)
  })
}*/

// 用 Saga 的方式写logger
/*function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('your-action', action)
    console.log('your-state', state)
  }
}*/

function* watchFirstThreeTodosCreation() {
  for(let i = 0; i < 3; i++) {
    const action = yield take(ADD_TODO)
  }

  yield put({type: SHOW_CONGRATULATION})
}

function* fetchData() {
  try {
    const data = yield call('https://api.github.com/users/minooo')
    yield put({type: 'FETCH_SUCCEEDED', data})
  } catch(error) {
    yield put({type: 'FETCH_FAILED', err})
  }
}

function* watchFetchData() {
  yield takeLatest('FETCH_REQUESTED', fetchData)
}

// 单一进入点，一次启动所有 Saga
export default function* rootSaga() {
  yield [
    watchIncrementAsync(),
    watchFetchData(),
    watchFirstThreeTodosCreation()
  ]
}