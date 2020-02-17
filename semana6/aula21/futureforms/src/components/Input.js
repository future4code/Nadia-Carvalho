import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Inpt = styled.input`
  border-radius: 5px;
  color: darkgrey;
  font-size: 0.95rem;
  margin: 5px 0;
`

class Input extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const type = this.props.type ? this.props.type : "text"
    return (
      <Inpt type={type} {...this.props}>{this.props.children}</Inpt>
    )
  }
}

Input.propTypes = {
  type: propTypes.string,
  value: propTypes.any.isRequired,
  onChange: propTypes.func.isRequired
}

export default Input