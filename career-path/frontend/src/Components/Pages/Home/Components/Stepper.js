import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Typography from '@material-ui/core/Typography'

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
  return ['Select campaign settings', 'Create an ad group', 'Create an ad']
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...'
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


      <div>
        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

      </div>


    </div>
  )
}