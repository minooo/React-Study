import React, { Component } from 'react'
import styles from './index.scss'

const TopList = ({activeBool, label, onClick}) => {
  return (
    <a
      href="javascript:void(0)"
      className={"font-34 center-center " + (activeBool ? "main-color " : "") + styles.root}
      onClick = {() => onClick()}
    >
      {label}
      {
        activeBool ?
        <span className="main-color font-24">▲</span> :
        <span className="color999 font-24">▼</span>
      }
    </a>
  )
}

export default TopList