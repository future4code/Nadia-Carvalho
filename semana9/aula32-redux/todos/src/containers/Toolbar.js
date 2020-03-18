import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { filtrarTarefa, completarTodas, removerCompletas } from '../actions/index';


function Toolbar(props) {
  return (
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"  
      >
        <Typography 
          variant="button" align="center" 
          style={{textDecoration: 'underline', margin: '1rem'}}
          onClick={props.completaTarefa}
        >
          Completar todas
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button 
            variant="contained" color="secondary" size="small"
            style={{margin: '5px'}}
            onClick={() => props.filtraTarefa('all') }
          >
            Todas
          </Button>
          <Button 
            variant="contained" color="secondary" size="small"
            style={{margin: '5px'}}
            onClick={() => props.filtraTarefa('pendent') }
          >
            Pendentes
          </Button>
          <Button 
            variant="contained" color="primary" size="small"
            style={{margin: '5px'}}
            onClick={() => props.filtraTarefa('completed') }
          >
            Completas
          </Button>
        </Grid>
        <Typography 
          variant="button" align="center" 
          style={{textDecoration: 'underline', margin: '1rem'}}
          onClick={props.removeTarefa}
        >
          Remover completas
        </Typography>
      </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    taskList: state.todos.taskList,
    filter: state.todos.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filtraTarefa: text => dispatch(filtrarTarefa(text)),
    completaTarefa: () => dispatch(completarTodas()),
    removeTarefa: () => dispatch(removerCompletas())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);