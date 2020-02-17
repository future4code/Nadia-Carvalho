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
      course: "",
      institution: ""
    }
  }
  validate = () => {
    return (
      this.state.course !== "" &&
      this.state.institution !== ""
    )
  }
  save = () => {
    if (this.validate()) {
      this.props.onSave(this.state)
    } else {
      alert("Formulário Inválido! Verifique os campos por favor.")
    }
  }
  render() {
    const header = "Etapa 2 - Informações do Ensino Superior"
    return (
      <Form header={header}>
        <InputContainer label="5. Qual o curso?">
          <Input 
            name="course" 
            value={this.state.course} 
            onChange={(e) => { this.setState({ course: e.target.value }) }}
          />
        </InputContainer>
        <InputContainer label="6. Qual a unidade de ensino?">
          <Input 
              name="institution" 
              value={this.state.institution} 
              onChange={(e) => { this.setState({ institution: e.target.value }) }}
              />
        </InputContainer>
        <InputContainer>
          <Button onClick={this.save}>Finalizar</Button>
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