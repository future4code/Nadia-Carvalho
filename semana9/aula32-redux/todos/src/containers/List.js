import React from 'react';
import List from '@material-ui/core/List';
import ItemDaLista from './ListItem';
import { connect } from 'react-redux';

function Lista(props) {
  return (
    <List>
      {props.lista.map((task, index) => {
        return (
          <ItemDaLista key={task.id} item={task} />
        );
      })}
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    lista: state.todos.taskList
  }
}


export default connect(mapStateToProps)(Lista);