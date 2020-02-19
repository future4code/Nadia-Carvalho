import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``

const Input = styled.input``

const Button = styled.button``


class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  onAdd = () => {
    if (this.state.input !== "") {
      this.props.onSave(this.state.input)
      this.setState({ input: '' })
    } else {
      alert("Preencha o campo da tarefa!")
    }
  }

  render() {
    return (
      <Container>
        <Input
          name="NovaTarefa"
          placeholder="Insira uma tarefa"
          onChange={(event) => { this.setState({ input: event.target.value }) }}
          onKeyDown={(event) => { if (event.keyCode === 13) this.onAdd() }}
          value={this.state.input}
        />
        <Button onClick={this.onAdd}>Adicionar</Button>
      </Container>
    );
  }
}

NewTask.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default NewTask;