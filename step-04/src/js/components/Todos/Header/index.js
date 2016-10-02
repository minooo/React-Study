import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'

export default class Header extends Component {

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo
          placeholder="添加要去做的事"
          onSave={this.handleSave}
        />
      </header>
    )
  }
}