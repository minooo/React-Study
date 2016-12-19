import React, { Component } from 'react'
import styles from './index.scss'
import TodoTextInput from '../TodoTextInput'

export default class Header extends Component {

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className={`relative ${styles.root}`}>
        <h1 className={styles.title}>记事本</h1>
        <TodoTextInput
          newTodo
          placeholder="添加要去做的事"
          onSave={this.handleSave}
        />
      </header>
    )
  }
}