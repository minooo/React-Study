import {
  takeEvery,
  delay,
  takeLatest,
  buffers,
  channel,
  eventChannel,
  END
} from 'redux-saga'
import {
  put,
  call,
  take,
  fork,
  select,
  actionChannel,
  cancel,
  cancelled
} from 'redux-saga/effects'

import fetch from 'isomorphic-fetch'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/actionsTypes'

// 异步获取数据，开始！
function fetchPostsApi(url) {
  return fetch(`https://api.github.com/users`)
    .then(response => response.json() )
    .then(json => json.map(item => item.url))
    .then(url => url.map(item => fetch(item).then(response => response.json())))
    .then(pro => Promise.all(pro))
}

/*function* fetchPosts() {
 const posts = yield call(fetchPostsApi)
 yield put({type: RECEIVE_POSTS, posts})
 }*/

/*为什么会出错误？？*/
/*function* fetchPosts() {
 const posts = yield call(fetchPostsApi)
 yield put(actions.onReceivePosts(posts))
 }*/

function* fetchPosts() {
  const posts = yield call(fetchPostsApi)
  yield put({type: RECEIVE_POSTS, posts})
}

export function* watchPost() {
  while( yield take(REQUEST_POSTS) ){
    yield fork(fetchPosts)
  }
}