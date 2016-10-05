import React, { Component } from 'react'
import styles from './index.scss'
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

  handleSubmit = (val) => {
    const text = val.trim()
    this.props.onSave(text)
    if (this.props.newTodo) {
      this.setState({text: ''})
    }
  }

  render() {
    let input

    return (
      <div>
        <input
          className={classnames({
            [styles.edit]: this.props.editing,
            [styles.newTodo]: this.props.newTodo
          })}
          ref={node => {input = node}}
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        {
          this.props.newTodo &&
          <button
            onClick={() => this.handleSubmit(input.value)}
          >
            点击添加
          </button>
        }

      </div>
    )
  }
}