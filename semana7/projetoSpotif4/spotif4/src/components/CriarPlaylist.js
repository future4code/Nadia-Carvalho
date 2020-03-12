import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Message from './Message'

const API = {
  baseUrl: 'https://us-central1-spotif4.cloudfunctions.net/api',
  headers: {
    auth: 'NadiaCarvalho'
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  max-width: 85vw;
  border: 1px dotted black;
  background-color: #1dd15d;
  border-radius: 20px;
  padding: 12px 0;
`
const Title = styled.h1`
  margin: 15px;
  font-size: 1.2rem;
`
const Label = styled.label`
  margin: 5px;
`
const Input = styled.input`
  border-radius: 5px;
  height: 24px;
`
const Button = styled.button`
  margin: 20px;
  width: 100px;
  height: 32px;
  border-radius: 7px;
  background-color: black;
  color: #1dd15d;
  border: 2px solid black;
  :hover {
    color: black;
    background-color: whitesmoke;
  }
`

class CriarPlaylists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playlistName: '',
      message: '',
      messageType: ''
    }
  }

  onChange = (e) => {
    this.setState({
      playlistName: e.target.value,
      message: '',
      messageType: ''
    })
  }

  onClick = () => {
    if (this.state.playlistName === '') {
      this.setState({
        message: 'Escolha um nome para sua playlist!',
        messageType: 'info'
      })
    } else {
      this.save(this.state.playlistName)
    }
  }

  save = async (playlistName) => {
    let message = ''
    let type = ''
    try {
      await axios.post(
        `${API.baseUrl}/playlists/createPlaylist`,
        { name: playlistName },
        { headers: API.headers }
      )
      message = `A playlist ${playlistName} foi criada com sucesso!`
      type = 'success'
    } catch (error) {
      message = `Esta playlist já foi criada.\nEscolha outro nome!`
      type = 'error'
    }
    this.setState({
      playlistName: '',
      message: message,
      messageType: type,
    })
  }

  render() {
    return (
      <Container>
        <Title>Criar uma nova Playlist</Title>
        <Label>Nome da Playlist</Label>
        <Input
          value={this.state.playlistName}
          onChange={this.onChange}
          placeholder="Playlist"
        />
        <Button onClick={this.onClick}>Salvar</Button>
        <Message type={this.state.messageType} text={this.state.message} />
      </Container>
    )
  }

}
export default CriarPlaylists