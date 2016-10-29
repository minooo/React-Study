import React, { Component } from 'react'
import styles from './index.scss'

/*
export default class TopList extends Component {
  onClick = () => {
    this.props.onClick(this.props.label)
  }
  render() {
    const { activeBool, label } = this.props
    return (
      <a
        href="javascript:void(0)"
        className={"font-28 center-center " + (activeBool ? "main-color " : "") + styles.root}
        onClick = {this.onClick}
      >
        {label}
        {
          activeBool ?
            <span className="main-color font-20">▲</span> :
            <span className="color999 font-20">▼</span>
        }
      </a>
    )
  }
}*/

/*
* https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
* 性能优化的两条建议
* 尽量写无状态组件
* 不要在JSX中使用 bind 或者箭头函数
* 如果无状态组件的那个箭头函数无法避免，那与之前的 没有绑定，没有在JSX中使用箭头函数的普通组件相比，两者如何取舍？
* 目前的办法：根据触发的次数来取舍
* 如果触发次数多，那就用普通的组件，反之，就用无状态组件
* */

const TopList = (props) => {
  return (
    <a
      href="javascript:void(0)"
      className={"font-28 center-center " + (props.activeBool ? "main-color " : "") + styles.root}
      onClick = {() => props.onClick(props.label)}
    >
      {props.label}
      {
        props.activeBool ?
          <span className="main-color font-20">▲</span> :
          <span className="color999 font-20">▼</span>
      }
    </a>
  )
}

export default TopList