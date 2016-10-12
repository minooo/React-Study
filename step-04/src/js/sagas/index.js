import { takeEvery, delay } from 'redux-saga'
import { put, call, take, fork, select } from 'redux-saga/effects'

import {
  INCREMENT_COUNTER
} from '../actions/actionsTypes'

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: INCREMENT_COUNTER})
}