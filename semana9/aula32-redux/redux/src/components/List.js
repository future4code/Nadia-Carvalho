import React from 'react';
import List from '@material-ui/core/List';
import ItemDaLista from './ListItem'

function Lista(props) {
  return (
    <List>
      {[0, 1, 2, 3].map(value => {
        return (
          <ItemDaLista />
        );
      })}
    </List>
  );
}

export default Lista;