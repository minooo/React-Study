import './styles/normalize.scss'
import './styles/app.scss'
import './styles/font.scss'
import './styles/animations.scss'

import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'
import App from './js/containers/App'
import Redbox from 'redbox-react'
const rootEl = document.getElementById('app');

render(
  <AppContainer errorReporter={Redbox}>
    <App />
  </AppContainer>,
  rootEl
)


if (module.hot) {
  module.hot.accept('./js/containers/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./js/containers/App').default;
    render(
      <AppContainer errorReporter={Redbox}>
        <NextApp />
      </AppContainer>,
      rootEl
    )
  });
}