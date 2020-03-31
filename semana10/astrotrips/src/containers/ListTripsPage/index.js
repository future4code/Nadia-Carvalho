import React from 'react';
import { Typography, GridList, GridListTile, CircularProgress, Grid, Divider, Box } from '@material-ui/core';
import CardTrip from './card';
import { connect } from 'react-redux';
import { getTrips } from '../../middlewares/trips';

class ListTripsPage extends React.Component {

  componentDidMount() {
    this.props.getTrips()
  }

  render() {
    const { tripList, isAdmin } = this.props
    return (
      <Box style={{padding: "10px"}}>
        <Grid container
          direction="column"
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Typography gutterBottom variant="h4">Current trips</Typography>
          {tripList && 
          <GridList
            cellHeight={"auto"}
            spacing={20}
            cols={1}
          >
            {tripList.map(trip => (
              <GridListTile key={trip.id}>
                <CardTrip trip={trip} isAdmin={isAdmin}/>
                <Divider/>
              </GridListTile>
            ))}
          </GridList>}
          {!tripList.length && <CircularProgress/>}
        </Grid>
      </Box>
    );
  }
  
}

const mapStateToProps = (state) => ({
  tripList: state.trips.trips,
  isAdmin: state.auth.isLogged
})

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);