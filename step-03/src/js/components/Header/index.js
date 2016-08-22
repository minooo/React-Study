import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class Header extends Component {
  state = {
    autoCity: '郑州',
    searchData: {
      cityLink: '/',
      cityName: '郑州',
      searchLink: '/',
      messageLink: '/',
      messageBool: true
    }
  }
  render () {
    const {
      autoCity,
      searchData
    } = this.state;
    return (
      <div className={styles.root}>
        <Link to={searchData.cityLink} className={styles.left}>
          <span className="font-size-14">{autoCity}</span>
          <span>▼</span>
        </Link>

        <Link to={searchData.searchLink} className={styles.center}>
          <i className={"i-4019 " + styles.linkThreeOne}></i>
          <span>嗖的一声</span>
        </Link>

        <Link to={searchData.messageLink} className={styles.right}>
          {searchData.messageBool ? <span className={styles.linkTwoTwo}></span> : ''}
          <i className="i-4020"></i>
        </Link>

      </div>
    )
  }
}

