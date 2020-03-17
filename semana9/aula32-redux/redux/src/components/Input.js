import React from 'react';
import Input from '@material-ui/core/Input';

function Task(props) {
  return (
    <div>
      <Input placeholder="Insira a tarefa" inputProps={{ 'aria-label': 'Nova Tarefa' }} />
    </div>
  );
}

export default Task;

