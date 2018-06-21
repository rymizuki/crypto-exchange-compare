import { createStore } from 'redux'
import reducers from './reducers'

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

const store = createStore(reducers, initialState)

export default store