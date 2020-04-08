import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import ResponsiveDrawer from './Components/Nav'
import Footer from './Components/Footer'
// import Home from './Components/Pages/Home/Home'
// import Register from './Components/Pages/Register/Register'
// import Login from './Components/Pages/Login/Login'

import Routes from './Routes'

function App() {
  return (
    <HashRouter>
      <ResponsiveDrawer />
      <Routes />
      <Footer />
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
