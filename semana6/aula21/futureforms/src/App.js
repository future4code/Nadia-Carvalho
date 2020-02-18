import React from 'react';
import './App.css';
import styled from 'styled-components'
import FormOne, { Ensino } from './steps/FormOne';
import FormTwo from './steps/FormTwo';
import FormThree from './steps/FormThree';
import FormDone from './steps/FormDone';

const Box = styled.div`
  border: 1px solid black;
  min-height: 90vh;
  width: 400px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  margin: 0 auto;
`;

const Step = {
  PersonalInfo: 1,
  CollegeInfo: 2,
  EducationalInfo: 3,
  Done: 4
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formOne: {},
      formTwo: {},
      formThree: {},
      currentStep: Step.PersonalInfo
    }
  }

  onSave = (data) => {
    let nextStep
    let { currentStep } = this.state
    switch (currentStep) {
      case Step.PersonalInfo:
          this.setState({ formOne: data })
          nextStep = 
            Number(data.education) === Ensino.SuperiorIncompleto ||
            Number(data.education) === Ensino.SuperiorCompleto
              ? Step.CollegeInfo : Step.EducationalInfo 
        break;
      case Step.CollegeInfo:
          this.setState({ formTwo: data })
          nextStep = Step.Done
        break;
      case Step.EducationalInfo:
          this.setState({ formThree: data })
          nextStep = Step.Done
        break;
      default:
          nextStep = this.state.currentStep + 1
        break;
    }
    this.changeStep(nextStep)
  }
  
  changeStep = (step) => {
    this.setState({ currentStep: step })
  }

  render() {
    let StepForm
    switch (this.state.currentStep) {
      case Step.PersonalInfo:
        StepForm = FormOne
        break;
      case Step.CollegeInfo:
        StepForm = FormTwo
        break;
      case Step.EducationalInfo:
        StepForm = FormThree
        break;
      default:
        StepForm = FormDone
        break;
    }
    return (
      <Box>
        <StepForm onSave={this.onSave} changeStep={this.changeStep} />
      </Box>
    )
  }
}

export default App;
