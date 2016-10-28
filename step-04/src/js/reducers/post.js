import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/actionsTypes'

const init = {
  isFetching: false,
  items: []
}

export default function post(state=init, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.post,
      }
    default:
      return state
  }
}