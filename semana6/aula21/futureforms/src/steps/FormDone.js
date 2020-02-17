import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Button from '../components/Button'
import Input from '../components/Input'
import Form from '../components/Form'
import InputContainer from '../components/InputContainer'

const Message = styled.p`
  
` 

class FormThree extends React.Component {
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
    const header = "O formulário acabou"
    return (
      <Form header={header}>
        <Message>Muito obrigado por participar! Entraremos em contato!</Message>
      </Form>
    )
  }
}

FormThree.propTypes = {
  onSave: propTypes.func.isRequired,
  changeStep: propTypes.func
}

export default FormThree