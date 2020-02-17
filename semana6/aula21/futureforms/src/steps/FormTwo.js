import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Button from '../components/Button'
import Input from '../components/Input'
import Form from '../components/Form'
import InputContainer from '../components/InputContainer'

class FormTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  validate = () => {

  }
  save = () => {
  }
  render() {
    const header = "Etapa 2 - Informações do Ensino Superior"
    return (
      <Form header={header}>
        <InputContainer>
          <Button onClick={this.save}>Próxima Etapa</Button>
        </InputContainer>
      </Form>
    )
  }
}

FormTwo.propTypes = {
  onSave: propTypes.func.isRequired,
  changeStep: propTypes.func
}

export default FormTwo