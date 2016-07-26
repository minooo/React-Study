import React, { Component } from 'react'
import styles from './FirstComponent.css'

export default class FirstComponent extends Component {
  handleClick = (e) => {
    e.preventDefault();
    alert('Hello, React!')
  };
  
  render() {
    return (
      <a href="" className={styles.toRed} onClick={this.handleClick}>点击我吧！</a>
    )
  }
}
