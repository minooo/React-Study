import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './index.scss'

export default class TodoItem extends Component {
  render() {
    const { todo, completeTodo } = this.props

    return (
      <li className={`relative bg-white last-no-border ${styles.root}`}>
        <input
          className={styles.toggle}
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
        <label
          className={classnames({
            'font-30': true,
            [styles.text]: true,
            [styles.completed]: todo.completed
          })}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.text}
        </label>
      </li>
    )
  }
}