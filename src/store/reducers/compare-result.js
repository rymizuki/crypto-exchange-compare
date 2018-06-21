export default function reducer (state = {}, action) {
  console.log('compare result', state, action)
  switch (action.type) {
    case 'START_COMPARE':
      return Object.assign({}, state, {
        process: true,
        price: null,
        error: null
      })
    case 'SUCCESS_COMPARE':
      return Object.assign({}, state, {
        process: false,
        price: action.price
      })
    case 'FAILED_COMPARE':
      return Object.assign({}, state, {
        process: false,
        error: action.error
      })
    default:
      return state
  }
}