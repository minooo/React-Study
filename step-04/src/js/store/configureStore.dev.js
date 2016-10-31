// 如果是开发模式，store 采用此配置

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger())
      // applyMiddleware 是redux的原生方法，它将所有中间件组成一个数组，依次执行。
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}

export default configureStore
