import React, { Component } from 'react'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  state = {
    text: this.props.text || ''
  }

  handleBlur = e => {
    if(!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({text: ''})
      }
    }
  }

  render() {
    return (
      <input
        className={classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder="填写你要计划完成的事情"
        autoFocus="true"
      />
    )
  }
}