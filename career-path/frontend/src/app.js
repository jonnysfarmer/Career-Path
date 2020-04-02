import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, HashRouter, Router } from 'react-router-dom'

import ResponsiveDrawer from './Components/Nav'


function App() {
  return (
    <HashRouter>
      <ResponsiveDrawer />
      <Switch>
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} /> */}

      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
