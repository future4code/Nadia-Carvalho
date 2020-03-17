import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function ItemDaLista(props) {
  return (
    <ListItem dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={false}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': 'line' }}
              />
            </ListItemIcon>
            <ListItemText primary={`Line item`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
  );
}

export default ItemDaLista;