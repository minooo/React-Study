import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './actionsTypes'

export const onRequestPosts = () => ({type: REQUEST_POSTS})
export const onReceivePosts = (post) => ({
  type: RECEIVE_POSTS,
  posts
})