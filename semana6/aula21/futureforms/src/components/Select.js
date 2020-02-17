import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Slct = styled.select`
  border-radius: 5px;
  color: darkgrey;
  font-size: 0.95rem;
`

class Select extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const type = this.props.type | "text"
    return (
      <Slct onChange={this.props.onChange}>{this.props.children}</Slct>
    )
  }
}

Input.propTypes = {
  type: propTypes.string,
  value: propTypes.any.isRequired,
  onChange: propTypes.func.isRequired
}

export default Input