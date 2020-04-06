import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: 'inline-block'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
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
        description: 'Create an account and input your current industry, sector and years of experience.  All this will be kept confidential until you apply for a position.',
      })
    case 1:
      return 'Step 2: What is an ad group anyways?'
    case 2:
      return 'Step 3: This is the bit I really care about!'
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
        <Typography align='center' color='textSecondary'>{getStepContent(activeStep).description}</Typography>
      </Container>


    </div>
  )
}