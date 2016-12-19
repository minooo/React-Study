import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL
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
    case CLEAR_COMPLETED:
      return state.filter(todo =>
        todo.completed === false
      )
    case COMPLETE_ALL:
      const areAllCompleted = state.every(todo =>
        todo.completed === true
      )
      return state.map(todo => ({
        ...todo, completed: !areAllCompleted
      }))
    default:
      return state
  }
}