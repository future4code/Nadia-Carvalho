import React from 'react';
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
  width: 400px;
  max-width: 85vw;
  border: 1px dotted black;
  background-color: #1dd15d;
  border-radius: 20px;
  padding: 12px 0;
  button {
    border-radius: 50%;
    background-color: black;
    color: #1dd15d;
  }
`
const Title = styled.h1`
  margin: 15px;
  font-size: 1.2rem;
`
const Label = styled.span`
  margin: 5px;
  width: 60%;
`
const List = styled.ul`
  > li {
    list-style: none;
    margin: 10px 0;
    width: 300px;
    max-width: 70vw;
    display: flex;
    justify-content: space-between;
  }
`

const ButtonDetail = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  :hover {
    color: black;
    background-color: #2dd70f;
  }
`
const ButtonDelete = styled.button`
  width: 25px;
  height: 25px;
  margin-left: 5px;
  :hover {
    color: black;
    background-color: #ff512a;
  }
` 
const Search = styled.input`
  border-radius: 5px;
  height: 24px;
  margin: 0 auto;
  display: block;
`

class PlaylistsCriadas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: [],
      filter: ''
    }
  }

  componentDidMount() {
   this.load()
  }

  onSearch = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filterPlaylists = () => {
    const { playlists, filter } = this.state
    const copyPlaylists = [...playlists]
    return copyPlaylists.filter(playlist => {
      const name = playlist.name.toLocaleLowerCase()
      return name.indexOf(filter.toLocaleLowerCase()) !== -1
    })
  }

  onDetailClick = (playlist) => {
    this.props.onDetail(playlist)
  }

  onDeleteClick = async (playlistId, playlistName) => {
    let message = `Remover a playlist ${playlistName}?`
    if (window.confirm(message)) {
      try {
        await axios.delete(
          `${API.baseUrl}/playlists/deletePlaylist?playlistId=${playlistId}`, 
          { headers : API.headers}
        )
        message = 'Playlist removida!'
        this.props.onDelete(playlistId)
        this.load()
      } catch {
        message = 'Não foi possível remover esta playlist!'
      }
      alert(message)
    }
  }

  load = async () => {
    let list = []
    try {
      const response = await axios.get(
        `${API.baseUrl}/playlists/getAllPlaylists`,
        { headers: API.headers }
      )
      list = response.data.result.list
    } catch (error) {
      console.log(error)
    }
    this.setState({
      playlists: [...list]
    })
  }

  render() {
    const filteredPlaylists = this.filterPlaylists()
    const { filter, playlists } = this.state
    return (
      <Container>
        <Title>Minhas Playlists</Title>
        { playlists.length > 0 && 
        <div>
          <Search 
            value={filter}
            onChange={this.onSearch} 
            placeholder="Pesquise uma playlist aqui!"
          />
          <List>
            {filteredPlaylists.map(playlist => {
              return (
                <li key={playlist.id}>
                  <Label>{playlist.name}</Label>
                  <div>
                    <ButtonDetail onClick={() => this.onDetailClick(playlist)}>&#9836;</ButtonDetail>
                    <ButtonDelete onClick={() => this.onDeleteClick(playlist.id, playlist.name)}>&#10006;</ButtonDelete>
                  </div>
                </li>
              )
            })}
          </List>
        </div>
        }
        { 
          filteredPlaylists.length === 0 &&
          <Message>Nenhuma playlist encontrada!</Message> 
        }
      </Container>
    )
  }

}

PlaylistsCriadas.propTypes = {
  onDetail: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default PlaylistsCriadas