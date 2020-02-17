import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Button from '../components/Button'
import Input from '../components/Input'
import Form from '../components/Form'
import InputContainer from '../components/InputContainer'

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
      this.state.age !== "" && Number(this.state.age) > 0 &&
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
    return (
      <Form header={header}>
        <InputContainer label="Qual seu nome?">
          <Input name="name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }}/>
        </InputContainer>
        <InputContainer label="Qual sua idade?">
          <Input name="age" value={this.state.age} onChange={(e) => { this.setState({ age: e.target.value }) }}/>
        </InputContainer>
        <InputContainer label="Qual seu email?">
          <Input name="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}/>
        </InputContainer>
        <InputContainer label="Qual a sua escolaridade?">
          <Input name="email" value={this.state.education} onChange={(e) => { this.setState({ education: e.target.value }) }}/>
        </InputContainer>
        <InputContainer>
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