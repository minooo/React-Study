import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Home,
  Coupon,
  CouponDetail,
  Tour,
  User,
  NotFoundPage,
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="coupon">
      <IndexRoute component={Coupon}/>
      <Route path=":id" component={CouponDetail}/>
    </Route>
    <Route path="tour" component={Tour}/>
    <Route path="user" component={User}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);