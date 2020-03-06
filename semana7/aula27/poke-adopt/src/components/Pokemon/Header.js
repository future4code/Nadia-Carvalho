import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const PokemonQuantity = styled.span``
const SortingSelect = styled.select``

class Header extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      currentSort: props.sortType.asc
    }
  }

  changeSort = (newSort) => {
    this.setState({currentSort: newSort})
    this.props.onChangeSort(newSort)
  }

  render() {

    const { pokemonCount, sortType } = this.props
    const { currentSort } = this.state
    
    const sortOptions = [
      <option key={1} value={sortType.asc}>Ascendente</option>,
      <option key={2} value={sortType.desc}>Decrescente</option>
    ]

    return (
      <Container>
        <PokemonQuantity>Quantidade de pokemons: {pokemonCount}</PokemonQuantity>
        <SortingSelect
          value={currentSort}
          onChange={(e) => this.changeSort(e.target.value)}
        >
          {sortOptions}
        </SortingSelect>
      </Container>
    )

  }
}

Header.propTypes = {
  pokemonCount: propTypes.number.isRequired,
  sortType: propTypes.object.isRequired,
  onChangeSort: propTypes.func.isRequired
}

export default Header