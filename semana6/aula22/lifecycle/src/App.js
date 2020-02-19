import React from 'react';
import './App.css';
import styled from 'styled-components'
import NewTask from './components/NewTask';

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
max-width:90vw;
border: 1px solid grey;
height: 90vh;
`
const Title = styled.h1``

const CreateTask = styled.div``

const TaskFilter = styled.div``

const TaskList = styled.div``

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      filter: ''
    }
  }

  onSave = (input) => {
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    }
    const newList = [newTask, ...this.state.list] 
    this.setState({list: newList})    
  }

  onFilter = () => {

  }

  filteredList = () => {

  }

  render() {
    return (
      <Box>
        <Title>Lista de Tarefas</Title>
        <CreateTask>
          <NewTask onSave={this.onSave} />
        </CreateTask>
        <ul>
        {this.state.list.map(l => <li key={l.id}>{l.text}</li>)}
          </ul>
        {
          /* <TaskFilter>
            <Filter onFilter={this.onFilter} />
          </TaskFilter>
          <TaskList>
            <List taskList={this.filteredList()} />
          </TaskList> */
        }
      </Box>
    );
  }

}
export default App;
