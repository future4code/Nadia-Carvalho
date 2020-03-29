import React from 'react';
import {
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Grid,
  List,
  ListItem
} from '@material-ui/core';

import { connect } from 'react-redux';
import { goToLink } from '../../middlewares/interface';
import { routes } from '../Router';

class ApplicationList extends React.Component {
  
  componentWillMount() {
    const { trip, goToList } = this.props
    if (!trip || !trip.id) {
      // goToList()
    }
  }
  
  render() {
    const { trip } = this.props
    return (
      <Paper style={{ padding: "16px" }}>
        <Typography
          style={{ marginBottom: "15px" }}
          variant="h5"
        >
          Candidates on {trip.name}
        </Typography>
        {trip.candidates &&
          <List>
          {trip.candidates.map(c => {
            return (
              <ListItem key={c.id}>
                {c.name}
              </ListItem>
            )
          })}
        </List>}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: state.trips.currentTrip
})

const mapDispatchToProps = (dispatch) => ({
  goToList: () => dispatch(goToLink(routes.tripsList))
})

export default (connect(mapStateToProps, mapDispatchToProps)(ApplicationList));