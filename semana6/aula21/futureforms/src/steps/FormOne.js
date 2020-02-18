import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Form from '../components/Form'
import InputContainer from '../components/InputContainer'

export const Ensino = {
  MedioIncompleto: 1,
  MedioCompleto: 2,
  SuperiorIncompleto: 3,
  SuperiorCompleto: 4,
}

class FormOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      email: "",
      education: "",
    }
  }
  validate = () => {
    return (
      this.state.name !== "" &&
      this.state.age !== "" && parseInt(this.state.age) > 0 &&
      this.state.email !== "" &&
      this.state.education !== ""
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
    const header = "Etapa 1 - Dados Gerais"
    const educationOptions = [
      {value: "", label: "Selecione"},
      {value: Ensino.MedioIncompleto, label: "Ensino Médio Incompleto"},
      {value: Ensino.MedioCompleto, label: "Ensino Médio Completo"},
      {value: Ensino.SuperiorIncompleto, label: "Ensino Superior Incompleto"},
      {value: Ensino.SuperiorCompleto, label: "Ensino Superior Completo"},
    ]
    return (
      <Form header={header}>
        <InputContainer label="1. Qual seu nome?">
          <Input 
            name="name" 
            value={this.state.name} 
            onChange={(e) => { this.setState({ name: e.target.value }) }}
          />
        </InputContainer>
        <InputContainer label="2. Qual sua idade?">
          <Input 
            name="age"
            type="number" 
            value={this.state.age} 
            onChange={(e) => { this.setState({ age: e.target.value }) }}
          />
        </InputContainer>
        <InputContainer label="3. Qual seu email?">
          <Input 
            name="email" 
            value={this.state.email} 
            onChange={(e) => { this.setState({ email: e.target.value }) }}
          />
        </InputContainer>
        <InputContainer label="4. Qual a sua escolaridade?">
          <Select 
            name="education" 
            value={this.state.education} 
            onChange={(e) => { this.setState({ education: e.target.value }) }}
            optionList={educationOptions}
          />
        </InputContainer>
        <InputContainer center>
          <Button onClick={this.save}>Próxima Etapa</Button>
        </InputContainer>
      </Form>
    )
  }
}

FormOne.propTypes = {
  onSave: propTypes.func.isRequired,
  changeStep: propTypes.func
}

export default FormOne
