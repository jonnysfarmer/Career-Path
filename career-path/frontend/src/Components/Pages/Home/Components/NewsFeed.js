import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from './Card'


const News = [
  {
    title: 'Some News Example',
    image: 'https://www.businesstimes.com.sg/sites/all/themes/custom/businesstimes/images/BTdefault800.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque.'
  },
  {
    title: 'Some News Example2',
    image: 'https://www.businesstimes.com.sg/sites/all/themes/custom/businesstimes/images/BTdefault800.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque.'
  }
]

const NewsFeed = () => {

  return (

    <Grid container justify="space-around" spacing={2}>
      {News.map((ele, i) => (
        <Grid key={i} item>
          <Card data={ele} />
        </Grid>
      ))}
    </Grid>


  )
}

export default NewsFeed