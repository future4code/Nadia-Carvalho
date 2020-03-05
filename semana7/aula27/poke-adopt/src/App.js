import React from "react"
import styled from "styled-components"
import Filtro from "./components/Filtro"
import AdoptionQueue from "./components/AdoptionQueue/AdoptionQueue"
import BotaoFila from "./fila.svg"
import PokemonHome from './components/Pokemon/Home'
import axios from 'axios'

const Main = styled.main`
  display: grid;
  grid-template-areas: 
    "filter pokemons pokemons pokemons cart";
  > section {
    border: 1px solid black;
  }
`
const FilterSection = styled.section`
  grid-area: filter;
  width: 200px;
`
const PokemonsSection = styled.section`
  grid-area: pokemons;  
`
const CartSection = styled.section`
  grid-area: cart;
  max-width: 200px;
  display: ${props => props.mostraFila ? "block" : "none"};
`

const CartButton = styled.button`
display:grid;
align-items: center;
justify-content:center;
padding-left: 15px;
position: fixed;
bottom: 10px;
right: 10px;
border: 1px solid black;
width:80px;
height:80px;
border-radius:50%;
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtroNome: "",
      mostraFila: true,
      pokemon: []
    }
  }

  async componentDidMount() {
    let pokeList = []
    for (let i = 1; i <= 151; i++) {
      const pokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      pokeList.push(pokeapi.data)
    }
    this.setState({ pokemon: pokeList })
  }

  onFilterpokemon = (filtro, valor) => {
    this.setState({
      [filtro]: valor
    })
  }

  onmostraFila = () => {
    this.setState({
      mostraFila: !this.state.mostraFila
    })
  }

  deletaItemFila = (pokemonId) => {
    let copiaPokemon = this.state.pokemon.map((elemento, index, array) => {
      if (elemento.id === pokemonId) {
        return ({
          ...elemento,
          adotado: false,
        })
      } else {
        return (elemento)
      }
    })
    this.setState({
      pokemon: copiaPokemon
    })
  }
  adicionaItemFila = (pokemonId) => {
    let copiaPokemon = this.state.pokemon.map((elemento, index, array) => {
      if (elemento.id === pokemonId) {
        return ({
          ...elemento,
          adotado: true
        })
      } else {
        return (elemento)
      }
    })
    this.setState({
      pokemon: copiaPokemon
    })
  }

  render() {

    let objetosFiltradosNome = this.state.pokemon.filter((elemento, index, array) => {
      return ((this.state.filtroNome) ? (elemento.name.toLowerCase().indexOf(this.state.filtroNome.toLowerCase()) !== -1) : true)
    })

    // FILTROS DO CARRINHO
    let pokemonFiltradoFila = this.state.pokemon.filter((elemento, index, array) => {
      return (elemento.adotado)
    })

    let textoFiltrador = objetosFiltradosNome

    return (
      <Main>
        <FilterSection>
          <Filtro
            filtro={this.onFilterpokemon}
            filtroNome={this.state.filtroNome}
          />
        </FilterSection>
        <PokemonsSection>
          <PokemonHome pokemonList={textoFiltrador} onAddToCart={this.adicionaItemFila} />
        </PokemonsSection>
        <CartSection mostraFila={this.state.mostraFila}>
          <AdoptionQueue listaDePokemon={pokemonFiltradoFila} removeOPokemon={this.deletaItemFila} />
        </CartSection>
        <CartButton onClick={this.onmostraFila}>
          <img src={BotaoFila} width="80%" alt="Fila de Adoção"/>
        </CartButton>
      </Main>

    );
  }
}

export default App;