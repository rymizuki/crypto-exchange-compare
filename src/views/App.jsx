import React from 'react'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Home from './containers/Home'

import * as usecase from '../usecase/app'

function mapStateToProps (state) {
  return {
    loading: state.asyncInitialState.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onStartApp: usecase.onStartApp(dispatch)
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.props.onStartApp() // XXX: これしないと asyncInitialState が初期化されない
  }
  render () {
    if (this.props.loading) {
      return (
        <div className="container">loading</div>
      )
    } 
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col">
              <Home/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)