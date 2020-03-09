import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import CircularBlack from './fonts/circular-black.woff2';
import Circular from './fonts/circular-book.woff2'

import CriarPlaylist from './components/CriarPlaylist'
import PlaylistsCriadas from './components/PlaylistsCriadas'
import DetalhesDaPlaylist from './components/DetalhesDaPlaylist'
import Player from './components/Player'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Circular-Black';
        src: local('Circular-Black'), local('Circular-Black'),
        url(${CircularBlack}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Circular';
        src: local('Circular'), local('Circular'),
        url(${Circular}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    * {
      margin: 0;
      padding: 0;
    }
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 80px auto 80px;
  grid-template-columns: 1fr;
  width: 100vw;
  height: 100vh;
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: black;
  color: #1dd15d;
  width: 100%;
  height: 80px;
  grid-row: 1/2;
  font-family: Circular-Black, Helvetica, Arial, sans-serif;
  > h1 {
    margin: 3px;
  }
`
const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 0.7rem;
  font-style: oblique;
  max-width: 95vw;
  height: 100%;
  > li {
    border: 1px dotted #1dd15d;
    width: 30vw;
    margin: 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
`
const Main = styled.main`
  width: 100%;
  height: calc(100% - 60px);
  padding: 25px 0;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  font-family: Circular, Helvetica, Arial, sans-serif;
`
const Footer = styled.footer`
  display: flex;
  grid-row: 3/4;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: #1dd15d;
  width: 100%;
  font-family: Circular, Helvetica, Arial, sans-serif;
  >div {
    margin-top:10px;
    >audio{
      height:40px;
    }
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTab: 'list',
      playlist: {},
      music: {}
    }
  }

  onDetail = (playlist) => {
    this.setState({
      showTab: 'detail',
      playlist: playlist
    })
  }

  onDelete = (playlistId) => {
    if (this.state.playlist.id === playlistId) {
      this.setState({playlist: {}})
    }
  }

  onMusics = (music) => {
    this.setState({
      music: music
    })
  }
  
  render() {
    const { showTab, playlist, music } = this.state
    return (
      <Container>
        <GlobalStyle />
        <Header>
          <h1>Spotif4</h1>
          <Menu>
            <li onClick={()=>this.setState({showTab: 'create'})}>Criar Playlist</li>
            <li onClick={()=>this.setState({showTab: 'list'})}>Ver Playlists</li>
            {playlist.id && <li onClick={()=>this.setState({showTab: 'detail'})}>Ver Detalhes</li>}
          </Menu>
        </Header>
        <Main>
          {showTab === 'create' && <CriarPlaylist/>}
          {
            showTab === 'list' && 
            <PlaylistsCriadas onDetail={this.onDetail} onDelete={this.onDelete}/>
          }
          {
            showTab === 'detail' && playlist.id && 
            <DetalhesDaPlaylist playlist={playlist} onMusics={this.onMusics}/>
          }
        </Main>
        <Footer>
          {
            music.url &&
            <Player url={music.url}/>
          }
          <h5>Feito por Nadia Carvalho</h5>
        </Footer>
      </Container>
    );
  }
}

export default App;
