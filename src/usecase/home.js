import cryptoCompare from 'cryptocompare'

import {
  changeMenu,
  changeValue,
  startCompare,
  successCompare,
  failedCompare
} from '../actions'

export function onChangeMenu (dispatch) {
  return (menu) => dispatch(changeMenu(menu))
}

export function onChangeValue (dispatch) {
  return (value) => dispatch(changeValue(value))
}

export function onSubmit (dispatch) {
  return async (menu, value) => {
    dispatch(startCompare(menu, value))

    try {
      const rate = await cryptoCompare.price(menu.from, menu.to)
      const result = value * rate[menu.to]
      dispatch(successCompare(result))
    } catch (err) {
      dispatch(failedCompare(err))
    }
  }
}