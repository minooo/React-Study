import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { todo } = this.props

    return (
      <li>
        <label>
          {todo.text}
        </label>
      </li>
    )
  }
}