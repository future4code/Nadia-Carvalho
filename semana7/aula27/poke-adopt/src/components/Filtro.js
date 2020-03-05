import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
`
const Titulo = styled.h1`
  width: 80%;
`
const Label = styled.label`
  width:40%;
  margin-bottom:10px;
`
const Input = styled.input`
  width: 40%;
  margin-bottom:10px;
  max-height:20px;
`

function Filtro(props) {

  let onChangeInputString = (event) => {
    props.filtro(event.target.name, event.target.value)
  }

  return (
    <Container>
      <Titulo>Filtros: </Titulo>
      <Label>Busca por Nome:</Label>
      <Input
        name="filtroNome"
        type="text"
        value={props.filtroNome}
        onChange={onChangeInputString}
      />
    </Container>
  );
}
export default Filtro;