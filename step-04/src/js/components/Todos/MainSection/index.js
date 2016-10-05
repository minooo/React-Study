import React, { Component } from 'react'
import TodoItem from '../TodoItem'

export default class MainSection extends Component {
  render() {
    const { todos, completeTodo, deleteTodo } = this.props
    return (
      <section>
        <ul>
          {todos.map(item =>
            <TodoItem
              key={item.id}
              todo={item}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          )}
        </ul>
      </section>
    )
  }
}
