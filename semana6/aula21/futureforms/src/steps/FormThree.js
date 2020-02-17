import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Form from '../components/Form'
import InputContainer from '../components/InputContainer'

class FormThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whynot: "",
      otherCourses: ""
    }
  }
  validate = () => {
    return (
      this.state.whynot !== "" &&
      this.state.otherCourses !== ""
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
    const header = "Etapa 3 - Informações Gerais de Ensino"
    const otherOptions = [
      { value: "", label: "Selecione" },
      { value: "NONE", label: "Nenhum" },
      { value: "TEC", label: "Curso técnico" },
      { value: "IDI", label: "Curso de idiomas" }
    ]
    return (
      <Form header={header}>
        <InputContainer label="5. Por que você não terminou um curso de graduação?">
          <Input
            name="whynot"
            value={this.state.whynot}
            onChange={(e) => { this.setState({ whynot: e.target.value }) }}
          />
        </InputContainer>
        <InputContainer label="6. Você fez algum curso complementar?">
          <Select 
            name="otherCourses" 
            value={this.state.otherCourses} 
            onChange={(e) => { this.setState({ otherCourses: e.target.value }) }}
            optionList={otherOptions}
          />
        </InputContainer>
        <InputContainer>
          <Button onClick={this.save}>Finalizar</Button>
        </InputContainer>
      </Form>
    )
  }
}

FormThree.propTypes = {
  onSave: propTypes.func.isRequired,
  changeStep: propTypes.func
}

export default FormThree