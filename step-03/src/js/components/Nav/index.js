/*
import React, {Component} from 'react';
import styles from './Nav.scss';
import NavLink from './NavLink';

export default class Nav extends Component {
  render() {
    const {children,nav}=this.props
    return (
      <div className="box">
        {children}
        <div style={{height:'60px'}}></div>
        <div className={ styles.root+" ui-border-t navbar" }>
          {nav.navs && nav.navs.map((n,i)=><NavLink key={i} pathUrl={n.link} icoName={n.icon} linkName={n.title} onlyActiveOnIndex/>)}
        </div>
      </div>
    )
  }
}*/

import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.scss'

class Nav extends Component {
  render() {
    const {children}=this.props
    return (
      <div className="box">
        {children}
        <div style={{height:'60px'}}></div>
        <div 
          className="ui-border-t"
          styleName="root"
        >
          <NavLink
            pathUrl="/"
            icoName={"i-zhuye42un"}
            activeLink={styles.navOne}
            linkName="首页"
            onlyActiveOnIndex
          />
          <NavLink
            pathUrl="/shop"
            icoName="i-haodian42un"
            activeLink={styles.navTwo}
            linkName="好店"
          />
          <NavLink
            pathUrl="/coupon"
            icoName="i-youhui42un"
            activeLink={styles.navThree}
            linkName="优惠"
          />
          <NavLink
            pathUrl="/tour"
            icoName="i-zhoubian42un"
            activeLink={styles.navFour}
            linkName="优惠"
          />
          <NavLink
            pathUrl="/user"
            icoName="i-wode42un"
            activeLink={styles.navFour}
            linkName="我的"
          />
        </div>
      </div>
    )
  }
}

/*如果是无状态组件就用下面的形式*/
/*const Tem = ({}) => {
 return (
 <h1>hello</h1>
 )
 };*/

export default CSSModules(Tem, styles);
