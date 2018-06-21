import { combineReducers } from 'redux'

import menus from './menus'
import compareForm from './compare-form'
import compareResult from './compare-result'

export default combineReducers({
  menus,
  compareForm,
  compareResult,
})