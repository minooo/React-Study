import React, { Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TodoTextInput from '../TodoTextInput'
import classnames from 'classnames'
import touchFunc from './touchFunc'
import styles from './index.scss'





export default class TodoItem extends Component {
  state = {
    btnsShow: false,
    editBool: false
  }

  componentDidMount() {
    touchFunc(this.refs.label, 'left', this.leftTouch)
  }

  componentDidUpdate() {
    this.refs.label && touchFunc(this.refs.label, 'left', this.leftTouch)
  }

  leftTouch = () => {
    this.setState({btnsShow: true})
  }

  hideBtns = () => {
    this.setState({btnsShow: false})
  }

  editClick = () => {
    this.setState({ editBool: true, btnsShow: false })
  }

  handleSave = (id, text) => {
    if(text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editBool: false })
  }


  render() {
    const { todo, completeTodo, deleteTodo } = this.props
    const { btnsShow, editBool } = this.state

    let element
    if (editBool) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={editBool}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      )
    } else {
      element = (
        <div>
          <input
            className={styles.toggle}
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label
            ref="label"
            className={classnames({
              'font-30': true,
              [styles.text]: true,
              [styles.completed]: todo.completed
            })}
            onClick={() => completeTodo(todo.id)}
          >
            <span
              className={classnames({
                [styles.con]: true,
                [styles.conComplete]: todo.completed
              })}
            >
              {todo.text}
            </span>
          </label>

          <ReactCSSTransitionGroup
            transitionName="btns"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            { btnsShow &&
            <div
              className={styles.btns}
            >
              <button
                className={styles.btnDelete}
                onClick={() => deleteTodo(todo.id)}
              >
                删除
              </button>
              <button
                className={styles.btnEdit}
                onClick={this.editClick}
              >
                编辑
              </button>
              <button
                className={styles.btnCancel}
                onClick={this.hideBtns}
              >
                取消
              </button>
            </div>
            }

          </ReactCSSTransitionGroup>
        </div>
      )
    }

    return (
      <li className={`last-no-border ${styles.root}`}>
        {element}
      </li>
    )
  }
}