import React, { Component } from 'react'
import routes from '../routes'
import { Router, browserHistory } from 'react-router'
import '../../styles/normalize.scss'
import '../../styles/app.scss'
import '../../styles/font.scss'
import '../../styles/animations.scss'

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    )
  }
}