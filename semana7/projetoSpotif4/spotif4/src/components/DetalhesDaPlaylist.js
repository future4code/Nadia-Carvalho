import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Playlist from './Playlist'
import AddMusica from './AddMusica'

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
  .title {
    display: flex;
    align-items: center;
  }
`
const Title = styled.h1`
  margin: 15px;
  font-size: 1.2rem;
`

const Button = styled.button`
  width: 25px;
  height: 25px;
  margin-left: 5px;
  :hover {
    color: black;
    background-color: #8596ff;
  }
` 

class DetalhesDaPlaylist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTab: 'list',
      musics: []
    }
  }

  onAddClick = () => {
    if (this.state.showTab !== 'create') {
      this.setState({ showTab: 'create' })
    } else {
      this.setState({ showTab: 'list' })
    }
  }

  onAddMusic = () => {
    this.setState({ showTab: 'list' })
  }

  onPlaylistLoad = (musics) => {
    this.setState({ musics: musics })
  }

  onAllMusics = () => {
    this.props.onMusics(this.state.musics[0])
  }

  render() {
    const { playlist, onMusics } = this.props 
    const { showTab } = this.state
    return (
      <Container>
        <div className="title">
          <Title>{playlist.name}</Title>
          <Button onClick={() => this.onAddClick()}>&#10011;</Button>
          <Button onClick={() => this.onAllMusics()}>&#9836;</Button>
        </div>
        { 
          showTab === 'list' && 
          <Playlist 
            playlist={playlist} 
            onPlaylistLoad={this.onPlaylistLoad} 
            onMusics={onMusics}
          />
        }
        { 
          showTab === 'create' && 
          <AddMusica 
            playlist={playlist} 
            onAddMusic={this.onAddMusic}
          />
        }
      </Container>
    )
  }

}

DetalhesDaPlaylist.propTypes = {
  playlist: PropTypes.object.isRequired,
  onMusics: PropTypes.func.isRequired
}

export default DetalhesDaPlaylist