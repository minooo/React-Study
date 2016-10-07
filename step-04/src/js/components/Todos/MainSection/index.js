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

    if(todos.length) {
      return (
        <Footer
          selectedFilter={filter}
          onShow={this.handleShow}
        />
      )
    }
  }

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
        {this.renderFooter()}
      </section>
    )
  }
}
