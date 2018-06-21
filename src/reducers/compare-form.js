import { setWith } from 'lodash'

export default function compareForm (state = [], action) {
  switch (action.type) {
    case 'CHANGE_MENU':
      return Object.assign({}, state, { menu: action.menu })
    case 'CHANGE_VALUE':
      return Object.assign({}, state, { value: action.value })
    default:
      return state
  }
}
