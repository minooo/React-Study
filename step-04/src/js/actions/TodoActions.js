import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from './actionsTypes'

export const addTodo = text => ({ type: ADD_TODO, text })
export const completeTodo = id => ({ type: COMPLETE_TODO, id})
export const deleteTodo = id => ({ type: DELETE_TODO, id})



