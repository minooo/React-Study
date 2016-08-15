import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class NavLink extends Component {
  render() {
    const { pathUrl, active, icoName, linkName, ...rest } = this.props;
    return (
    <Link
      {...rest}
      to={pathUrl}
      activeClassName={active}
      className={styles.root}
    >
    <i className={icoName + ' ' + styles.ico} />
    <span className={styles.text}>{linkName}</span>
    </Link>
    )
  }
}