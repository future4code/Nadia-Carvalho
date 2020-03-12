import React from 'react'
import PropTypes from 'prop-types'
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
  width: 90%;
  padding: 6px 0;
`
const Label = styled.label`
  margin: 5px;
`
const Input = styled.input`
  border-radius: 5px;
  width: 90%;
  height: 24px;
`
const Button = styled.button`
  margin: 20px;
  width: 100px;
  height: 32px;
  border-radius: 7px !important;
  background-color: black;
  color: #1dd15d;
  border: 2px solid black;
  :hover {
    color: black;
    background-color: whitesmoke;
  }
`

const ButtonBack = styled.button`
  width: 25px;
  height: 25px;
  margin-left: 5px;
  :hover {
    color: black;
    background-color: #8596ff;
  }
` 

class AddMusica extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      musicName: '',
      musicArtist: '',
      musicUrl: 'http://spoti4.future4.com.br/1.mp3',
      message: '',
      messageType: ''
    }
  }

  onChange = (target, event) => {
    this.setState({
      [target]: event.target.value,
      message: '',
      messageType: ''
    })
  }

  onClick = () => {
    let hasError = false
    let message = ''
    const {musicName, musicArtist, musicUrl} = this.state
    if (musicUrl === "") {
      hasError = true
      message = "Informe a URL da música!"
    }
    if (musicArtist === "") {
      hasError = true
      message = "Informe o artista da música!"
    }
    if (musicName === "") {
      hasError = true
      message = "Informe o nome da música!"
    }
    if (hasError) {
      this.setState({
        message: message,
        messageType: 'info'
      })
    } else {
      this.save(musicName, musicArtist, musicUrl)
    }
  }

  save = async (musicName, musicArtist, musicUrl) => {
    let message = ''
    let type = ''
    const { playlist } = this.props
    const putMusic = {
      playlistId: playlist.id,
      music: {
        name: musicName,
        artist: musicArtist,
        url: musicUrl
      }
    }
    try {
      await axios.put(
        `${API.baseUrl}/playlists/addMusicToPlaylist`,
        putMusic,
        { headers: API.headers }
      )
      message = `A música ${musicName} by ${musicArtist} foi adicionada com sucesso!`
      type = 'success'
    } catch (error) {
      message = `Não foi possível adicionar esta música!`
      type = 'error'
    }
    this.setState({
      message: message,
      messageType: type,  
    })
    if (type === 'success') {
      this.setState({
        musicName: '',
        musicArtist: '',
        musicUrl: ''
      })
    }
  }

  onGoBack = () => {
    this.props.onAddMusic()
  }

  render() {
    return (
      <Container>
        <div className="title">
          <ButtonBack onClick={() => this.onGoBack()}>&#8672;</ButtonBack>
        </div>
        <Label>Nome da Música</Label>
        <Input
          value={this.state.musicName}
          onChange={(e) => this.onChange('musicName', e)}
          placeholder="Música"
        />
        <Label>Nome do Artista</Label>
        <Input
          value={this.state.musicArtist}
          onChange={(e) => this.onChange('musicArtist', e)}
          placeholder="Artista"
        />
        <Label>URL da Música</Label>
        <Input
          value={this.state.musicUrl}
          onChange={(e) => this.onChange('musicUrl', e)}
          placeholder="URL"
        />
        <Button onClick={this.onClick}>Salvar</Button>
        <Message type={this.state.messageType} text={this.state.message} />
      </Container>
    )
  }

}

AddMusica.propTypes = {
  onAddMusic: PropTypes.func.isRequired,
  playlist: PropTypes.object.isRequired
}

export default AddMusica