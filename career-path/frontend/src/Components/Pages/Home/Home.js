import React from 'react'

import { Container } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import MainBanner from './Components/MainBanner'
import HorizontalNonLinearStepper from './Components/Stepper'

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  paper: {
    display: 'flex',
    flexDirection: 'column'
    // alignItems: 'center',
    // justifyContent: 'center',
    // minHeight: '100%'

  },
  backgroundColor: {
    // backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }



}))






const Home = () => {

  const classes = useStyles()





  return (
    <div className={classes.backgroundColor}>
      <Container maxWidth="lg">

        <MainBanner />
        <HorizontalNonLinearStepper />

      </Container>
    </div>

  )


}

export default Home