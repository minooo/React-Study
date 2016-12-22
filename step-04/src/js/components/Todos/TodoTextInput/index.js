import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
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

  handleSubmit = val => {
    const text = val.trim()
    this.props.onSave(text)
    if (this.props.newTodo) {
      this.setState({text: ''})
    }
  }

  componentDidMount() {
    this.textInput.focus()
  }

  render() {
    return (
      <div
        className={classnames({
          'relative': true,
          [styles.root]: this.props.newTodo
        })}
      >
        <input
          className={classnames({
            [styles.edit]: this.props.editing,
            [styles.newTodo]: this.props.newTodo
          })}
          ref={node => {this.textInput = node}}
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        {
          this.props.newTodo &&
          <button
            onClick={() => this.handleSubmit(this.textInput.value)}
            className={styles.btn}
          >
            <Icon type="plus" />
          </button>
        }

      </div>
    )
  }
}