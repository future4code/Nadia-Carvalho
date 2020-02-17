import React from 'react';
import './App.css';
import styled from 'styled-components'
import FormOne from './steps/FormOne';
import FormTwo from './steps/FormTwo';
import FormThree from './steps/FormThree';
import FormDone from './steps/FormDone';

const Box = styled.div`
  border: 1px solid black;
  min-height: 100vh;
  width: 400px;
  max-width: 90vw;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formOne: {},
      formTwo: {},
      formThree: {},
      currentStep: 0
    }
  }

  onSave = (data) => {
    switch (this.state.currentStep) {
      case 0:
        this.setState({ formOne: data })
        break;
      case 1:
        this.setState({ formTwo: data })
        break;
      case 2:
        this.setState({ formThree: data })
        break;
    }
    this.changeStep(this.state.currentStep + 1)
  }
  
  changeStep = (step) => {
    this.setState({ currentStep: step })
  }

  render() {
    let StepForm
    switch (this.state.currentStep) {
      case 0:
        StepForm = FormOne
        break;
      case 1:
        StepForm = FormTwo
        break;
      case 2:
        StepForm = FormThree
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
