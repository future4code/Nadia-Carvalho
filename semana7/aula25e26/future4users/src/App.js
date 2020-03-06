import React from 'react';
import styled from 'styled-components'
import CriarUsuario from './components/CriarUsuario'
import ListaDeUsuarios from './components/ListaDeUsuarios'

const Container = styled.div`
display: flex;
justify-content: center;
align-content: center;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      proximaTela: "lista"
    }
  }

  trocarDePagina = () => {
    if (this.state.proximaTela == "cadastro") {
      this.setState({ proximaTela: "lista" })
    } else {
      this.setState({ proximaTela: "cadastro" })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.trocarDePagina}>Ir para {this.state.proximaTela}</button>
        <Container>
          {this.state.proximaTela !== "cadastro" ? (<CriarUsuario />) : (<ListaDeUsuarios />)}
        </Container>
      </div>
    )
  }
}


export default App;
