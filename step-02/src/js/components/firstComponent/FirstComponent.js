import React, { Component } from 'react'
import styles from './FirstComponent.scss'

export default class FirstComponent extends Component {
  handleClick = (e) => {
    e.preventDefault();
    alert('Hello, React!')
  };
  
  render() {
    return (
      <div>
        <a href="" className={styles.toRed} onClick={this.handleClick}>点击我吧！</a>
        <div className={styles.myDiv}>条件判断</div>
        <div className={styles.myDiv2}>test2</div>
        <div className={styles.search}>test2</div>
        <div className={styles.noticeGlear}>test23333</div>
      </div>
      
    )
  }
}
