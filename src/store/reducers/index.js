import { combineReducers } from 'redux'
import { innerReducer, outerReducer } from 'redux-async-initial-state'

import menus from './menus'
import compareForm from './compare-form'
import compareResult from './compare-result'

export default outerReducer(combineReducers({
  menus,
  compareForm,
  compareResult,
  asyncInitialState: innerReducer,
}))