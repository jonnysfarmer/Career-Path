import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, HashRouter, Router } from 'react-router-dom'

import ResponsiveDrawer from './Components/Nav'
import Home from './Components/Pages/Home/Home'
import Register from './Components/Pages/Register/Register'
import Login from './Components/Pages/Login/Login'

function App() {
  return (
    <HashRouter>
      <ResponsiveDrawer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={Register} />
        <Route exact path='/login' component={Login} />


      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
