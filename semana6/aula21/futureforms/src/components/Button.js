import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Btn = styled.button`
  border-radius: 10px;
  color: white;
  background-color: black;
  text-align: center;
  width: 120px;
  height: 32px;
`

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const type = this.props.type | "button"
    return (
      <Btn type={type} onClick={this.props.onClick}>{this.props.children}</Btn>
    )
  }
}

Button.propTypes = {
  type: propTypes.string,
  onClick: propTypes.func.isRequired
}

export default Button