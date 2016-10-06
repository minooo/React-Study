import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO
} from '../actions/actionsTypes'

const initialState = [{
  text: 'learn redux',
  completed: false,
  id: 0
}]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )
    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
        { ...todo, text: action.text } :
        todo
      )
    default:
      return state
  }
}