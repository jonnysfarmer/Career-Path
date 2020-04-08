import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  instructionsContent: {
    marginBottom: theme.spacing(4)
  }
}))

function getSteps() {
  return ['Create an account with a summary of your experience', 'Browse relevent roles from named employers', 'Apply and get feedback directly']
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ({
        name: 'Create an account',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque. Tincidunt dui ut ornare lectus sit amet. Posuere lorem ipsum dolor sit amet. Arcu cursus euismod quis viverra nibh cras pulvinar mattis.'
      })
    case 1:
      return ({
        name: 'Browse relevent roles from direct employers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque. Tincidunt dui ut ornare lectus sit amet. Posuere lorem ipsum dolor sit amet. Arcu cursus euismod quis viverra nibh cras pulvinar mattis.'
      })
    case 2:
      return ({
        name: 'Apply and get feedback directly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque. Tincidunt dui ut ornare lectus sit amet. Posuere lorem ipsum dolor sit amet. Arcu cursus euismod quis viverra nibh cras pulvinar mattis.'
      })
    default:
      return 'Unknown step'
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {

  const classes = useStyles()
  const steps = getSteps()

  const [activeStep, setActiveStep] = useState(0)

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  return (
    <div className={classes.root}>
      <Typography variant='h4' align='center'>
        How it works
      </Typography>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
              >
                {label}
              </StepButton>
            </Step>
          )
        })}
      </Stepper>


      <Container maxWidth="sm">
        <Typography variant='h6' align='center' className={classes.instructions}>{getStepContent(activeStep).name}</Typography>
        <Typography align='center' color='textSecondary' className={classes.instructionsContent}>{getStepContent(activeStep).description}</Typography>
      </Container>


    </div>
  )
}