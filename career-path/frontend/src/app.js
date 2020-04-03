import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, HashRouter, Router } from 'react-router-dom'

import ResponsiveDrawer from './Components/Nav'
import Home from './Components/Pages/Home/Home'

function App() {
  return (
    <HashRouter>
      <ResponsiveDrawer />
      <Switch>
        <Route exact path='/' component={Home} />


      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
