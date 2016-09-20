import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class FastNav extends React.Component {
  render() {
    const { data } = this.props
    if (data.link.indexOf('http') > -1) {
      return (
        <a
          href={data.link}
          className={`center-center-column ${styles.root}`}
        >
          <img
            src={data.thumb}
            className={styles.thumb}
            alt=""
          />
          <span className={styles.title}>
            {data.title}
          </span>
        </a>
      )
    } else {
      return (
        <Link
          to={data.link}
          className={`center-center-column ${styles.root}`}
        >
          <img
            src={data.thumb}
            className={styles.thumb}
            alt=""
          />
          <span className={styles.title}>
            {data.title}
          </span>
        </Link>
      )
    }
  }
}