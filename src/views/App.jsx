import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Home from './containers/Home'

const App = () => (
  <div>
    <Header></Header>
    <div className="container">
      <div className="row">
        <div className="col">
          <Home/>
       </div>
      </div>
    </div>
  </div>
)

export default App