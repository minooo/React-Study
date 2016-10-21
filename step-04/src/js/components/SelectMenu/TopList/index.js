import React, { Component } from 'react'
import styles from './index.scss'

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
}