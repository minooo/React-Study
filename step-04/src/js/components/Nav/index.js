import React, { Component } from 'react'
import NavLink from './NavLink'
import styles from './index.scss'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div style={{height:'1.2rem'}}></div>
        <div className={styles.root}>
          <NavLink
            pathUrl="/"
            icoName={"i-zhuye42un"}
            active={styles.navOne}
            linkName="简单"
            onlyActiveOnIndex
          />
          <NavLink
            pathUrl="/coupon"
            icoName="i-youhui42un"
            active={styles.navThree}
            linkName="一般"
          />
          <NavLink
            pathUrl="/tour"
            icoName="i-zhoubian42un"
            active={styles.navFour}
            linkName="复杂"
          />
          <NavLink
            pathUrl="/user"
            icoName="i-wode42un"
            active={styles.navFive}
            linkName="异步"
          />
        </div>
      </div>
    )
  }
}

