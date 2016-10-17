import { takeEvery, delay } from 'redux-saga'
import { put, call, take, fork, select } from 'redux-saga/effects'

import {
  INCREMENT_COUNTER,
  INCREMENT_ASYNC
} from '../actions/actionsTypes'

// 我们的干活的 Saga: 将执行 异步加一 。
export function* incrementAsync() {
  yield call(delay, 3000)
  yield put({type: INCREMENT_COUNTER})
}

// 我们监视的 Saga: 每个调用 INCREMENT_ASYNC 的动作将触发 异步加一 的5毛特效。
export function* watchIncrementAsync() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync)
}


// 单一进入点，一次启动所有 Saga
export default function* rootSaga() {
  yield [
    watchIncrementAsync()
  ]
}