import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { AppBar, Container, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Toolbar, Button, Typography, ThemeProvider } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
// import HomeIcon from '@material-ui/icons/Home'

// import { indigo, teal, red, green, orange } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'


const drawerWidth = 200

const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
    width: '100%'
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    backgroundColor: '#FFF',
    boxShadow: 'none'


  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1,
    textDecoration: 'none'

  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  }
}))

function ResponsiveDrawer(props) {

  const { container } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // const history = useHistory()
  // const location = history.location.pathname

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Login', 'Register'].map((elem, i) => (

          // <Link to={`/${elem}`} key={i} color='primary'>
          <ListItem key={i}>
            <Typography component="h3" variant="subtitle1" color='textSecondary' >
              {elem}
            </Typography>
          </ListItem>
          // </Link>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <ThemeProvider theme={theme}> */}

      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar >
          <Link to='/' className={classes.grow}>
            <Typography variant="h6" color='textSecondary'>
              Path One
            </Typography>
          </Link>

          <Button edge='end' href="/#/signup/" color="primary" size='small' variant="contained" className={classes.desktopMenuButton}>Sign Up</Button>
          <Button edge='end' href="/#/login/" color="primary" size='small' className={classes.desktopMenuButton}>Login</Button>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            size='small'
          >
            <MenuIcon />
          </IconButton>


        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClick={handleDrawerToggle}
            anchor='right'
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

      </nav>
      {/* </ThemeProvider> */}
    </div>
  )
}

export default ResponsiveDrawer