import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import Footer from '../Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../actions/actionsTypes'

import styles from './index.scss'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: item => item.completed,
  [SHOW_ACTIVE]: item => !item.completed
}

export default class MainSection extends Component {
  state = {
    filter: SHOW_ALL
  }

  handleShow = filter => {
    this.setState({filter})
  }

  renderFooter() {
    const { todos } = this.props
    const { filter } = this.state
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count, 0
    )
    const activeCount = todos.length - completedCount

    if(todos.length) {
      return (
        <Footer
          selectedFilter={filter}
          onShow={this.handleShow}
          uncompletedCount={activeCount}
        />
      )
    }
  }

  render() {
    const { todos, completeTodo, deleteTodo, editTodo } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])

    return (
      <section className={styles.root}>
        <ul className={styles.wrap}>
          {filteredTodos.map(item =>
            <TodoItem
              key={item.id}
              todo={item}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )}
        </ul>
        {this.renderFooter()}
      </section>
    )
  }
}
