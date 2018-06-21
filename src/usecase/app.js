import { startApp } from '../actions'

export function onStartApp (dispatch) {
  return () => dispatch(startApp())
}
