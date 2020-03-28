import React from 'react';
import Paper from '@material-ui/core/Paper'
import { Typography, GridList, GridListTile, CircularProgress, Grid } from '@material-ui/core';
import CardTrip from './card';
import { connect } from 'react-redux';
import { getTrips } from '../../middlewares/trips';

class ListTripsPage extends React.Component {

  componentDidMount() {
    this.props.getTrips()
  }

  render() {
    const { tripList } = this.props
    return (
      <Paper style={{padding: "10px"}}>
        <Grid container
          direction="column"
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Typography gutterBottom variant="h4">Current trips</Typography>
          {tripList && 
          <GridList
            cellHeight={240}
            spacing={10}
            cols={1}
          >
            {tripList.map(trip => (
              <GridListTile key={trip.id}>
                <CardTrip trip={trip}/>
              </GridListTile>
            ))}
          </GridList>}
          {!tripList.length && <CircularProgress/>}
        </Grid>
      </Paper>
    );
  }
  
}

const mapStateToProps = (state) => ({
  tripList: state.trips.trips
})

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);