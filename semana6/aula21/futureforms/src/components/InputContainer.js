import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Container = styled.div`
  margin: 10px;
  padding: 5px;
`
const Label = styled.label`
  font-weight: bolder;
`

class InputContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container>
        {this.props.label && <Label>{this.props.label}</Label>}
        {this.props.children}
      </Container>
    )
  }
}

InputContainer.propTypes = {
  label: propTypes.string,
}

export default InputContainer