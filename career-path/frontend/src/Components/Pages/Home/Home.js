import React from 'react'

import { useHistory } from 'react-router-dom'

import { Hidden, ThemeProvider, Divider, Fade, Tooltip, Icon, Grid, Typography, Container, CssBaseline } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'



import Box from '@material-ui/core/Box'

import MainBanner from './Components/MainBanner'

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  paper: {
    display: 'flex',
    flexDirection: 'column',
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

  },
  spacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    color: theme.palette.secondary.main


  },
  titlemargin: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  textspacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  maxWidth: {
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center'

  }



}))






const Home = () => {

  const classes = useStyles()
  const history = useHistory()




  return (
    <div className={classes.backgroundColor}>
      <Container maxWidth="lg">

        <MainBanner />

      </Container>
    </div>

  )


}

export default Home