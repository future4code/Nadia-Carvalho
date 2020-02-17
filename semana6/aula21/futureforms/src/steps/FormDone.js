import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Button from '../components/Button'
import Input from '../components/Input'
import Form from '../components/Form'
import InputContainer from '../components/InputContainer'

const Message = styled.p`
  width: 300px;
  max-width: 60vw;
  text-align: center;
` 

class FormDone extends React.Component {
  render() {
    const header = "O formulário acabou"
    return (
      <Form header={header}>
        <Message>Muito obrigado por participar!<br/>Entraremos em contato!</Message>
      </Form>
    )
  }
}

export default FormDone