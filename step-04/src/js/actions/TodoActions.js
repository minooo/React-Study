import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO
} from './actionsTypes'

export const addTodo = text => ({ type: ADD_TODO, text })
export const completeTodo = id => ({ type: COMPLETE_TODO, id})
export const deleteTodo = id => ({ type: DELETE_TODO, id})
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text})



