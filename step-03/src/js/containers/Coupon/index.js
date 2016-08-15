import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Coupon extends Component {
  render() {
    return (
      <div className="absolute">
        <h1>Coupon</h1>
        <p>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="/coupon:1">详情</Link>
      </div>
    )
  }
}
