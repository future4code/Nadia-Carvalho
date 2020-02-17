import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`
const Header = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`

class Form extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <FormContainer onSubmit={e => { e.preventDefault(); }}>
        <Header>{this.props.header}</Header>
        {this.props.children}
      </FormContainer>
    )
  }
}

Form.propTypes = {
  header: propTypes.string.isRequired
}

export default Form