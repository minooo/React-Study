import React from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'
import '../../styles/normalize.scss'
import '../../styles/app.scss'
import '../../styles/antdStyleReset.scss'
import '../../styles/font.scss'
import '../../styles/animations.scss'
import 'moment/locale/zh-cn'


const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

export default Root