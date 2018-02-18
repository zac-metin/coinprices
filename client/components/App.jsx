import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Coinprices from './Coinprices'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route exact path="/" component={Coinprices} />
    </div>
  </Router>
)

export default App
