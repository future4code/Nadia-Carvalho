import React from 'react'
import styled, { css } from 'styled-components'
import propTypes from 'prop-types'

const Container = styled.div`
  margin: 10px;
  padding: 5px;
  width: 90%;
  max-width: 90vw;
  display: flex;
  flex-wrap: wrap;
  ${props => props.center && css`
    justify-content: center;
  `}
`
const Label = styled.label`
  font-weight: lighter;
  margin: 5px;
`

class InputContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container {...this.props}>
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