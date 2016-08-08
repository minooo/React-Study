import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Home,
  Coupon,
  Shop,
  Tour,
  User
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="coupon" component={Coupon} />
    <Route path="shop" component={Shop} />
    <Route path="tour" component={Tour} />
    <Route path="user" component={User} />
  </Route>
)