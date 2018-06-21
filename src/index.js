import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import fetch from 'node-fetch'
global.fetch = fetch // XXX: for cryptocompare

import store from './store'
import App from './views/App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
 