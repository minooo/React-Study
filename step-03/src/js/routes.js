import React from 'react'
import {Route, IndexRoute} from 'react-router'

import {
  App,
  Home,
  Coupon,
  CouponDetail,
  Shop,
  Tour,
  User
} from './containers'

import {Nav} from './components'

export default (
  <Route>
    <Route path="/" component={Nav}>
      <IndexRoute component={Home}/>
      <Route path="coupon" component={Coupon}/>
      <Route path="shop" component={Shop}/>
      <Route path="tour" component={Tour}/>
      <Route path="user" component={User}/>
    </Route>
    <Route path="coupon:id" component={CouponDetail}/>
  </Route>
)