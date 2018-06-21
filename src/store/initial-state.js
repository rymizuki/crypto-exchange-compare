import { applyMiddleware, compose } from 'redux'
import * as asyncInitialState from 'redux-async-initial-state'

const menus = [
  {
    key: 'JPY_ETH',
    from: 'JPY',
    to: 'ETH',
  },
  {
    key: 'ETH_JPY',
    from: 'ETH',
    to: 'JPY',
  }
]

const initialState = {
  menus,
  compareForm: {
    menu: menus[0],
    value: 100,
  },
  compareResult: {
    process: false,
    price: null,
    error: null,
  },
}

async function initialize() {
  return new Promise(resolve => resolve(initialState))
}

export default compose(applyMiddleware(
  asyncInitialState.middleware(initialize)
))

