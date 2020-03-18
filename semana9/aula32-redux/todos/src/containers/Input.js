import React from 'react';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { criarTarefa } from '../actions/index'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
    }
  }
  onChangeInput = (e) => {
    this.setState({ inputText: e.target.value })
  }

  onEnterPress = (e) => {
    if (e.keyCode === 13 && this.state.inputText) {
      this.props.addTask(this.state.inputText)
      this.setState({ inputText: '' })
    }

  }
  render() {
    return (
      <div>
        <Input
          placeholder="Insira a tarefa"
          inputProps={{ 'aria-label': 'Nova Tarefa' }}
          value={this.state.inputText}
          onChange={this.onChangeInput}
          onKeyDown={this.onEnterPress}
        />
      </div>
    );
  }

}

const mapDispatchtoProps = (dispatch) => {
  return {
    addTask: text => dispatch(criarTarefa(text))
  }
}

export default connect(null, mapDispatchtoProps)(Task);

