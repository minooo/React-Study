import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

import {
  App,
  Home,
  Coupon,
  CouponDetail,
  Shop,
  Tour,
  User,

  NotFoundPage,
} from './containers'

import {Nav, Header} from './components'

export default (
  <Route>
    <Route path="/" component={Nav}>
      <IndexRoute component={Home}/>
      <Route path="coupon">
        <IndexRoute component={Coupon}/>
        <Route path=":id" component={CouponDetail}/>
      </Route>
      <Route path="shop" component={Shop}/>
      <Route path="tour" component={Tour}/>
      <Route path="user" component={User}/>
    </Route>

    
    <Route path="*" component={NotFoundPage}/>
  </Route>
);