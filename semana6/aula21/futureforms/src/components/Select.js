import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Slct = styled.select`
  border-radius: 5px;
  color: darkgrey;
  font-size: 0.95rem;
  margin: 5px 0;
`

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value | ""
    }
  }
  render() {
    const multiple = this.props.multiple ? "multiple" : false
    const optionList = this.props.optionList.map((opt) => {
      return (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      )
    })
    return (
      <Slct 
      multiple={multiple} 
      onChange={(e) => {
        this.setState({value: e.target.value})
        this.props.onChange(e)
      }}
      value={this.state.value}
      {...this.props}
      >{optionList}</Slct>
    )
  }
}

Select.propTypes = {
  multiple: propTypes.bool,
  value: propTypes.any.isRequired,
  onChange: propTypes.func.isRequired,
  optionList: propTypes.array.isRequired
}

export default Select