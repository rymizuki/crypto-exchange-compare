import React from 'react'
import { connect } from 'react-redux'

import Compare from '../components/Compare'

import * as usecase from '../../usecase/home'

function mapStateToProps (state) {
  return {
    menus: state.menus,
    menu: state.compareForm.menu,
    value: state.compareForm.value,
    result: state.compareResult,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onChangeMenu: usecase.onChangeMenu(dispatch),
    onChangeValue: usecase.onChangeValue(dispatch),
    onSubmit: usecase.onSubmit(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare)