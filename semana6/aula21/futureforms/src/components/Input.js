import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Inpt = styled.input`
  border-radius: 5px;
  color: darkgrey;
  font-size: 0.95rem;
`

class Input extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const type = this.props.type | "text"
    return (
      <Inpt type={type} value={this.props.value} onChange={this.props.onChange}>{this.props.children}</Inpt>
    )
  }
}

Input.propTypes = {
  type: propTypes.string,
  value: propTypes.any.isRequired,
  onChange: propTypes.func.isRequired
}

export default Input