import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class Title extends Component {
  render() {
    const { text, linkName, path } = this.props;
    return (
      <h3 className={styles.root}>
        <span className={styles.left}>{text}</span>
        {
          linkName &&
          <Link to={path} className={styles.link}>
            <em className={styles.text}>{linkName}</em>
            <i className={`i-you40  ${styles.icon}`} />
          </Link>
        }
      </h3>
    )
  }
}
