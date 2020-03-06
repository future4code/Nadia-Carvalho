import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'
import List from './List'

const BoxContainer = styled.div`
display: grid;
grid-column: repeat(100px);
grid-row: repeat (100px);
`

export const sortType = {
  asc: 'asc',
  desc: 'desc',
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: sortType.asc,
    }
  }

  sortedPokemons = () => {
    const { sort } = this.state
    const { pokemonList } = this.props
    const pokeList = [...pokemonList]
    
    if (sort === sortType.asc) {
      return pokeList
    } else {
      return pokeList.reverse()
    }
  }

  onChangeSort = (newSort) => {
    this.setState({ sort: newSort })
  }

  render() {

    const { pokemonList, onAddToCart } = this.props
    const quantity = pokemonList.length
    const pokeList = this.sortedPokemons()

    return (
      <BoxContainer>
        <Header 
          sortType={sortType}
          pokemonCount={quantity}
          onChangeSort={this.onChangeSort} 
        />
        <List 
          pokemonList={pokeList} 
          onAddToCart={onAddToCart} 
        />
      </BoxContainer>
    )

  }
}

Home.propTypes = {
  pokemonList: propTypes.array.isRequired,
  onAddToCart: propTypes.func.isRequired
}

export default Home