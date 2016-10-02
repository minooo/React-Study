import {
  ADD_TODO
} from '../actions/actionsTypes'

const initialState = [{
  text: 'Learn Redux',
  id: 0
}]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text
        },
        ...state
      ]
    default:
      return state
  }
}