import React from 'react'
import styled from 'styled-components'

const BoxContainer = styled.div`
width:200px;
height:100%;
margin: 10px;
`
const DeletaItem = styled.p`
:hover{color:red; cursor: pointer;}
`
const AlinhaTexto = styled.div `
display: flex;
justify-content:space-between;
font-size: 0.8rem;
width:90%;
padding:5px;
box-sizing:border-box;
 p { 
  margin: 5px;
  text-align:left;
  justify-self: left
}
`

const CartText = styled.p`
width: 60%;` 


function AdoptionQueue(props) {
  const pokemonInseridoNoPokeAdopt =
    props.listaDePokemon.map((cadaPokemon, index) => {
      return (
        <AlinhaTexto key={index}>
          <CartText>
            {cadaPokemon.name}
          </CartText>
          <DeletaItem onClick={() => props.removeOPokemon(cadaPokemon.id)} > X </DeletaItem>
        </AlinhaTexto>
      )
    })
  return (
    <BoxContainer>
      <h1>PokeAdopt:</h1>
      <p>Total: {props.listaDePokemon.length}</p>
      {pokemonInseridoNoPokeAdopt}
    </BoxContainer>
  )
}

export default AdoptionQueue



