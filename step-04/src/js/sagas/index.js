import { takeEvery, delay, takeLatest, buffers } from 'redux-saga'
import { put, call, take, fork, select, actionChannel } from 'redux-saga/effects'

// delay 延迟执行
// takeEvery 监控某个动作，如果该动作被触发，则执行传入的 saga，如果动作被多次触发，则依次执行
// takeLatest 监控某个动作，如果该动作被出发，则执行传入的 saga，如果动作被多次触发，则只执行最新的动作
// buffers 限制存入序列的动作数量  const requestChan = yield actionChannel('REQUEST', buffers.sliding(5))

// put 调用动作，dispatch adtion
// take 监控某个动作
// call 异步调用，阻塞
// fork 异步调用，非阻塞（分流）
// actionChannel 依次处理每个被监控的动作

import {
  INCREMENT_COUNTER,
  INCREMENT_ASYNC,
  COUNT_DOWN,
  ASYNC_OVER,
  ADD_TODO,
  SHOW_CONGRATULATION
} from '../actions/actionsTypes'

// 我们的干活的 Saga: 将执行 异步加一 。
function* incrementAsync() {
  for(let i = 0; i < 3; i++) {
    yield call(delay, 1000)
    yield put({type: COUNT_DOWN})
  }
  yield put({type: INCREMENT_COUNTER})
  yield put({type: ASYNC_OVER})
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