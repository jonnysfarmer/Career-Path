  
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTgvMDIvMTQvMTIvMTUvMTQvODUzL0pvYiBTZWFyY2guanBnIl0sWyJwIiwidGh1bWIiLCI4MDB4NDUwIyJdXQ)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}))

export default function MainFeaturedPost() {
  const classes = useStyles()
  // const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src='https://source.unsplash.com/random' alt='title' />} */}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              The smarter way to get hired
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              World
            </Typography>
            <Link variant="subtitle1" href="#">
              Hello World
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
