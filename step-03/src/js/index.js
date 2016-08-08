import 'babel-polyfill'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './containers/Root'

const rootEl = document.getElementById('app');
render(
  <AppContainer>
    <Root history={browserHistory} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./containers/Root').default;
    const RedBox = require('redbox-react').default;
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