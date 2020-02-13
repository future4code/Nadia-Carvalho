import React from 'react'
import ReactTypes from 'prop-types'
import styled from 'styled-components'

const FormPost = styled.div``
const Label = styled.label``
const Input = styled.input``

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addAvatar : "",
      addUser : "",
      addPic : "",
    }
  }

  save = () => {

  }

  onChange = (change) => {
    this.setState(change)
  }

  render() {
    return (
      <FormPost>
        {/* <FormButtons>
          <HeadMessage>Adicione um novo Post</HeadMessage>
          <AddButton>Criar</AddButton>
        </FormButtons>
        <Form>
          <FormInput>
            
          </FormInput>
        </Form> */}
        <Label>User: {this.state.addUser}</Label>
        <Input 
          name="user" 
          value={this.state.addUser}
          onChange={(e) => this.onChange({addUser: e.target.value})}
        />
      </FormPost>
    )
  }

}

AddPost.propTypes = {onAddPost: ReactTypes.object.isRequired}

export default AddPost