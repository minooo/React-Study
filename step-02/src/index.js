import './styles/normalize.scss'
import './styles/app.scss'
import './styles/font.scss'
import './styles/animations.scss'

import 'babel-polyfill'
import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'
import App from './js/containers/App'
const RedBox = require('redbox-react').default;
const rootEl = document.getElementById('app');

try {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  )
} catch (e) {
  render(
    <RedBox error={e}>
      <AppContainer>
        <App />
      </AppContainer>
    </RedBox>,
    rootEl
  )
}


if (module.hot) {
  module.hot.accept('./js/containers/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./js/containers/App').default;
    try {
      render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        rootEl
      )
    } catch (e) {
      render(
        <RedBox error={e}>
          <AppContainer>
            <NextApp />
          </AppContainer>
        </RedBox>,
        rootEl
      )
    }
  });
}