import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
border: 1px solid grey;
display: flex;
flex-direction:column;
width: 400px;
justify-content: center;
align-content: center;
padding: 10px;
`

const Input = styled.input``

const Button = styled.button``

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

class CriarUsuario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: ""
    }
  }
  save = () => {
    if (this.state.name !== "" && this.state.email !== "") {
      const data = {
        name: this.state.name,
        email: this.state.email
      }
      const request = axios.post(`${baseURL}/users/createUser`, data,{
        headers: {
          'Content-type': 'application/json',
          'api-token': 'string'

        }
      } )
    } else {

    }
  }


  render() {
    return (
      <Container>
        <label>Nome:</label>
        <Input
          name="nome"
          value={this.state.name}
          onChange={(e) => { this.setState({ name: e.target.value }) }}
          placeholder="Insira aqui o nome do Usuário" />

        <label>E-mail:</label>
        <Input
          name="email"
          value={this.state.email}
          onChange={(e) => { this.setState({ email: e.target.value }) }}
          placeholder="Insira aqui o e-mail do Usuário" />
        <Button onClick={this.save}>Salvar</Button>
      </Container>
    )
  }
}
export default CriarUsuario