import React, { Component } from 'react'
import classnames from 'classnames'
import { Button } from 'antd-mobile'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../actions/actionsTypes'

import styles from './index.scss'

const FILTER_TITLES = {
  [SHOW_ALL]: '全部',
  [SHOW_ACTIVE]: '未完成',
  [SHOW_COMPLETED]: '已完成'
}

export default class Footer extends Component {
  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { selectedFilter, onShow } = this.props
    return (
      <a
        className={classnames({ [styles.selected]: filter === selectedFilter})}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    )
  }

  renderTodoCount() {
    const { uncompletedCount } = this.props
    const itemword = uncompletedCount > 0 ? uncompletedCount + ' 个任务未完成' : '目前没有任务'

    return (
      <span>
        {itemword}
      </span>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    return (
      <Button
        type="primary"
        className={styles.clearBtn}
        onClick={onClearCompleted}
        disabled={completedCount<1}
      >
        清除已完成
      </Button>
    )
  }

  render() {
    return (
      <footer className={styles.footer}>
        {this.renderTodoCount()}
        <ul className={"space-between " + styles.filters}>
          {[SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE].map(item =>
            <li key={item}>
              {this.renderFilterLink(item)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}