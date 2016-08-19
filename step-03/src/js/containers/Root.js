import React, { Component } from 'react'
import routes from '../routes'
import { Router } from 'react-router'
import '../../styles/normalize.scss'
import '../../styles/app.scss'
import '../../styles/antdStyleReset.scss'
import '../../styles/font.scss'
import '../../styles/animations.scss'

export default class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <Router history={history} routes={routes} />
    )
  }
}
