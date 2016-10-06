import React, { Component } from 'react';
import Header from './Header'
import MainSection from './MainSection'
import styles from './index.scss'

export default class Todos extends Component {
  render() {
    const { addTodo, todos, completeTodo, deleteTodo, editTodo } = this.props
    return (
      <div className={styles.root}>
        <Header addTodo={addTodo}/>
        <MainSection
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    );
  }
}

