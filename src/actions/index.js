export function startApp () {
  return { type: 'APP_START' }
}

export function changeMenu (menu) {
  return { type: 'CHANGE_MENU', menu }
}

export function changeValue (value) {
  return { type: 'CHANGE_VALUE', value }
}

export function startCompare (menu, value) {
  return { type: 'START_COMPARE', menu, value }
}

export function successCompare (price) {
  return { type: 'SUCCESS_COMPARE', price }
}

export function failedCompare (err) {
  return { type: 'FAILED_COMPARE', err }
}
