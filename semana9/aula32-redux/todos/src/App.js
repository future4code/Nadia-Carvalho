import React from 'react';
import Task from './containers/Input.js'
import Lista from './containers/List'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from './containers/Toolbar'



function App() {
  return (
    <Container maxWidth="sm">
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"  
      >
        <Typography variant="h3" align="center">4Task</Typography>
        <Task />
        <Lista />
        <Toolbar />
      </Grid>
    </Container>
  );
}

export default App;


