import React,{ Component } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

const ACTIVE = { color: 'red' }
export default class Home extends Component {
  render() {
    const {children}=this.props
    return (
      <div className="box">
        <h1>Home</h1>
        <div>
          <h1>APP!</h1>
          <ul>
            <li><IndexLink to="/"           activeStyle={ACTIVE}>首页</IndexLink></li>
            <li><Link      to="/shop"      activeStyle={ACTIVE}>好店</Link></li>
            <li><Link      to="/coupon"      activeStyle={ACTIVE}>优惠</Link></li>
            <li><Link      to="/tour"      activeStyle={ACTIVE}>周边</Link></li>
            <li><Link      to="/user"      activeStyle={ACTIVE}>我的</Link></li>
          </ul>
          {children}
        </div>
      </div>
    )
  }
}

