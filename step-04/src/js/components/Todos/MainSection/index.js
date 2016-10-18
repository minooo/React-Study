import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import Footer from '../Footer'
import { Switch, NoticeBar } from 'antd-mobile'
import { createForm } from 'rc-form'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../actions/actionsTypes'

import styles from './index.scss'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: item => item.completed,
  [SHOW_ACTIVE]: item => !item.completed
}

class MainSection extends Component {
  state = {
    filter: SHOW_ALL
  }

  handleShow = filter => {
    this.setState({filter})
  }

  renderToggleAll(completedCount) {
    const { todos, completeAll } = this.props
    const { getFieldProps } = this.props.form
    if (todos.length > 0) {
      return (
        <Switch
          {...getFieldProps('Switch1', {
            initialValue: completedCount === todos.length,
            valuePropName: 'checked',
          })}
          className={styles.switch}
          onChange={completeAll}
        />
      )
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if(todos.length) {
      return (
        <Footer
          selectedFilter={filter}
          onShow={this.handleShow}
          uncompletedCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={this.props.clearCompleted}
        />
      )
    }
  }

  render() {
    const { todos, completeTodo, deleteTodo, editTodo, showCongratulation } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.filter(item => item.completed === true).length

    return (
      <section className={styles.root}>
        {this.renderToggleAll(completedCount)}
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
        { showCongratulation &&
          <NoticeBar mode="closable">
            恭喜成功添加三个任务！
          </NoticeBar>
        }

        {this.renderFooter(completedCount)}
      </section>
    )
  }
}

MainSection = createForm()(MainSection)

export default MainSection