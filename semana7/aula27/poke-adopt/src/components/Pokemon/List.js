import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components'

const PokemonList = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content:space-evenly;

`
const PokemonCard = styled.li`
list-style: none;
width: 200px;
`

const Card = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr repeat(3, 30px);
margin: 10px;
border: 1px dotted grey;
padding: 5px;
`
const Picture = styled.img`
display: flex;
align-content: center;
justify-content: center;
width: 100%;
max-width: 200px;
`
const Name = styled.span``
const Button = styled.button``

class List extends React.Component {

  render() {

    const { pokemonList, onAddToCart } = this.props
    const list = pokemonList.map(
      (pokemon) => {
        return (
          <PokemonCard key={pokemon.name}>
            <Card>
              <Picture src={pokemon.sprites.front_default} alt={pokemon.name}/>
              <Name>{pokemon.name}</Name>
              <Button onClick={() => onAddToCart(pokemon.id)} disabled={pokemon.adotado}>Adotar</Button>
            </Card>
          </PokemonCard>
        )
      }
    )

    return (
      <PokemonList>
        {list}
      </PokemonList>
    )

  }
}

List.propTypes = {
  pokemonList: propTypes.array.isRequired,
  onAddToCart: propTypes.func.isRequired
}

export default List