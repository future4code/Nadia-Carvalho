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
const Input = styled.input`
  margin: 5px;
`
const Button = styled.button`
  margin: 10px auto;
  width: 120px;
  height: 40px;
  color: white;
  background-color: darkblue;
  :hover {
    color: black;
    background-color: blueviolet;
  }
`

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
    const data = {
      name: this.state.name,
      email: this.state.email
    }
    const request = axios.post(`${baseURL}/users/createUser`, data, {
      headers: {
        'api-token': 'Nadia'
      }
    })
    request.then(response => {
      console.log(response)
      alert("Usuário criado com sucesso!")
    }).catch(error => {
      alert("Não foi possível salvar este usuário!")
      console.log(error.response.data.message)
    })
  }

  onSaveButton = () => {
    if (this.state.name !== "" && this.state.email !== "") {
      this.save()
    } else {
      alert("Preencha todos os campos!")
    }
  }

  render() {
    return (
      <Container>
        <label>Nome:</label>
        <Input
          name="nome"
          type="text"
          value={this.state.name}
          onChange={(e) => { this.setState({ name: e.target.value }) }}
          placeholder="Nome" />

        <label>E-mail:</label>
        <Input
          name="email"
          type="text"
          value={this.state.email}
          onChange={(e) => { this.setState({ email: e.target.value }) }}
          placeholder="E-mail" />
        <Button onClick={this.onSaveButton}>Salvar</Button>
      </Container>
    )
  }
}
export default CriarUsuario