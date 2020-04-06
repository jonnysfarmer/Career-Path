import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Components/Pages/Home/Home'
import Register from './Components/Pages/Register/Register'
import Login from './Components/Pages/Login/Login'

function Routes() {
  return (

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={Register} />
      <Route exact path='/login' component={Login} />


    </Switch>

  )
}
export default Routes