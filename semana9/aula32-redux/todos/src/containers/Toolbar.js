import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'


function Toolbar(props) {
  return (
      <Grid 
        container
        direction="row"
        justify="space-between"
        alignItems="center"  
      >
        <Typography variant="p" align="center">Completar todas</Typography>
        <Button>Todas</Button>
        <Button>Pendentes</Button>
        <Button>Completas</Button>
        <Typography variant="p" align="center">Remover todas</Typography>
        </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);