import React from 'react'
import ReactTypes from 'prop-types'
import styled from 'styled-components'

const FormPost = styled.div`
  border: 1px solid grey;
  width:300px;
  margin: 20px; 
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`
const FormInput = styled.div`
display: flex;
margin: 2px;
`
const Header = styled.h1`
text-align: center;
`
const Label = styled.label`
padding: 2px;
`
const Input = styled.input`
flex-grow: 1;
`
const Button = styled.button`
 background: palevioletred;
    color: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addAvatar: "",
      addUser: "",
      addPic: "",
    }
  }

  save = () => {
    if (this.state.addUser === "" || !validURL(this.state.addAvatar) || !validURL(this.state.addPic)) {
      alert("Dados inválidos! Tente novamente.")
      return
    }
    const post = {
      avatar: this.state.addAvatar,
      user: this.state.addUser,
      image: this.state.addPic,
    }
    this.props.onAddPost(post)
  }

  render() {
    return (
      <FormPost>
        <Header>
          InstaFake
        </Header>
        <FormInput>
          <Label>User</Label>
          <Input
            name="user"
            value={this.state.addUser}
            onChange={(e) => this.setState({ addUser: e.target.value })}
          />
        </FormInput>
        <FormInput>
          <Label>Avatar</Label>
          <Input
            name="avatar"
            value={this.state.addAvatar}
            onChange={(e) => this.setState({ addAvatar: e.target.value })}
          />
        </FormInput>
        <FormInput>
          <Label>Picture</Label>
          <Input
            name="picture"
            value={this.state.addPic}
            onChange={(e) => this.setState({ addPic: e.target.value })}
          />
        </FormInput>
        <Button onClick={this.save}>Criar Post!</Button>
      </FormPost>
    )
  }

}

AddPost.propTypes = { onAddPost: ReactTypes.func.isRequired }

export default AddPost