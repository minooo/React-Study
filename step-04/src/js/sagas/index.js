import { takeEvery, delay } from 'redux-saga'
import { put, call, take, fork, select } from 'redux-saga/effects'

import {
  INCREMENT_COUNTER,
  INCREMENT_ASYNC
} from '../actions/actionsTypes'

export function* incrementAsync() {
  yield call(delay, 3000)
  yield put({type: INCREMENT_COUNTER})
}

export default function* rootSaga() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync)
}