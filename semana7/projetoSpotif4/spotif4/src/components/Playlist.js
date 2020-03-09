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

const Label = styled.dl`
  margin: 5px;
  width: 60%;
  dt {
    font-size: 0.9rem;
    font-weight: bold;
  }
  dd {
    font-size: 0.8rem;
    font-style: italic;
  }
`
const List = styled.ul`
  > li {
    list-style: none;
    margin: 10px 0;
    width: 300px;
    max-width: 70vw;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
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

class Playlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      musics: [],
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

  filterMusics = () => {
    const { musics, filter } = this.state
    const copyMusics = [...musics]
    return copyMusics.filter(music => {
      const name = music.name.toLocaleLowerCase()
      const artist = music.artist.toLocaleLowerCase()
      return (
        name.indexOf(filter.toLocaleLowerCase()) !== -1 ||
        artist.indexOf(filter.toLocaleLowerCase()) !== -1
      )
    })
  }

  onDetailClick = (musics) => {
    this.props.onMusics(musics)
  }

  onDeleteClick = async (musicId, musicName) => {
    let message = `Remover a música ${musicName}?`
    const { playlist } = this.props
    if (window.confirm(message)) {
      try {
        await axios.delete(
          `${API.baseUrl}/playlists/removeMusicFromPlaylist?playlistId=${playlist.id}&musicId=${musicId}`, 
          { headers : API.headers}
        )
        message = 'Música removida!'
        this.load()
      } catch {
        message = 'Não foi possível remover esta música!'
      }
      alert(message)
    }
  }

  load = async () => {
    let list = []
    const { playlist, onPlaylistLoad } = this.props
    try {
      const response = await axios.get(
        `${API.baseUrl}/playlists/getPlaylistMusics/${playlist.id}`,
        { headers: API.headers }
      )
      list = response.data.result.musics
    } catch (error) {
      console.log(error)
    }
    this.setState({
      musics: [...list]
    })
    onPlaylistLoad([...list])
  }

  render() {
    const filteredMusics = this.filterMusics()
    const { filter, musics } = this.state
    return (
      <div>
        { 
          musics.length > 0 && 
          <div>
            <Search
              value={filter} 
              onChange={this.onSearch} 
              placeholder="Pesquise uma música aqui!"
            />
            <List>
              {filteredMusics.map(music => {
                return (
                  <li key={music.id}>
                    <Label>
                      <dt>{music.artist}</dt>
                      <dd>{music.name}</dd>
                    </Label>
                    <div>
                      <ButtonDetail onClick={() => this.onDetailClick(music)}>&#9836;</ButtonDetail>
                      <ButtonDelete onClick={() => this.onDeleteClick(music.id, music.name)}>&#10006;</ButtonDelete>
                    </div>
                  </li>
                )
              })}
            </List>
          </div>
        }
        { 
          filteredMusics.length === 0 &&
          <Message>Nenhuma música encontrada!</Message> 
        }
      </div>
    )
  }

}

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired,
  onPlaylistLoad: PropTypes.func.isRequired,
  onMusics: PropTypes.func.isRequired
}

export default Playlist