import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { alternaTarefa, removerTarefa } from '../actions'
import { connect } from 'react-redux'

class ItemDaLista extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checked:props.completed,
    }
  }
  render(){
  return (
    <ListItem dense button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={this.state.checked}
          onClick={() => this.props.alternaTarefa(this.props.item.id)}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': 'line' }}
        />
      </ListItemIcon>
      <ListItemText primary={this.props.item.name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => this.props.removeTarefa(this.props.item.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
}

const mapDispatchtoProps = (dispatch) => {
  return {
    alternaTarefa: id => dispatch(alternaTarefa(id)),
    removeTarefa: id => dispatch(removerTarefa(id)),
  }
}

export default connect(null, mapDispatchtoProps)(ItemDaLista);