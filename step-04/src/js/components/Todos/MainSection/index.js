import React, { Component } from 'react'
import TodoItem from '../TodoItem'

export default class MainSection extends Component {
  render() {
    const { todos } = this.props
    return (
      <section>
        <ul>
          {todos.map(item =>
            <TodoItem key={item.id} todo={item} />
          )}
        </ul>
      </section>
    )
  }
}
