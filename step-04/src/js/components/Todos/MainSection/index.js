import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import styles from './index.scss'

export default class MainSection extends Component {
  render() {
    const { todos, completeTodo, deleteTodo, editTodo } = this.props
    return (
      <section className={styles.root}>
        <ul className={styles.wrap}>
          {todos.map(item =>
            <TodoItem
              key={item.id}
              todo={item}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )}
        </ul>
      </section>
    )
  }
}
