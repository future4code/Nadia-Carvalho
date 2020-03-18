import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { alternaTarefa, removerTarefa } from '../actions'
import { connect } from 'react-redux'

function Lista(props) {
  return (
    <List>
      {props.lista.map((task) => {
        return (
          <ListItem key={task.id} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.completed}
                onClick={() => props.alternaTarefa(task.id)}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItemIcon>
            <ListItemText primary={task.name} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => props.removeTarefa(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    lista: state.todos.taskList.filter(task => {
      switch (state.todos.filter) {
        case 'pendent':
          return !task.completed
        case 'completed':
          return task.completed
        default:
          return true
    }})
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    alternaTarefa: id => dispatch(alternaTarefa(id)),
    removeTarefa: id => dispatch(removerTarefa(id)),
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Lista);