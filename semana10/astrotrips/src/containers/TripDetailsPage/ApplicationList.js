import React from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Badge
} from '@material-ui/core';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import EjectOutlinedIcon from '@material-ui/icons/EjectOutlined';
import GavelIcon from '@material-ui/icons/Gavel';

import { connect } from 'react-redux';
import { goToLink } from '../../middlewares/interface';
import { routes } from '../Router';
import { doDecideCandidate } from '../../middlewares/trips';

class ApplicationList extends React.Component {
  
  componentWillMount() {
    const { trip, goToList, admin } = this.props
    if (!trip || !trip.id || !admin) {
      goToList()
    }
  }

  decide = (candidate, approve) => {
    const {decideCandidate, trip, admin} = this.props
    candidate.approve = approve
    decideCandidate(admin, trip, candidate)
  }
  
  render() {
    const { trip } = this.props
    return (
      <Paper style={{ padding: "16px" }}>
        <Typography
          style={{ marginBottom: "15px" }}
          variant="h5"
        >
          Applications on {trip.name}
        </Typography>
        {(!trip.applications || trip.applications.length === 0) &&
          <Typography gutterBottom paragraph variant="caption">
            There is no applications into this trip yet!
          </Typography>
        }
        {trip.applications &&
          <List>
          {trip.applications.map(candidate => {
            return (
              <ListItem key={candidate.id}>
                  <ListItemText
                    style={{flex: "none", width: "90%"}}
                    primary={`${candidate.name} (${candidate.age}) - ${candidate.country}`}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                          style={{display: "block"}}
                        >
                          {candidate.profession}
                        </Typography>
                        <Typography
                          component="span"
                          variant="caption"
                          color="textSecondary"
                        >
                          {candidate.applicationText}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  {candidate.approve && 
                      <Badge color="secondary" badgeContent={"✓"}>
                        <GavelIcon/>
                      </Badge>}
                  {!candidate.approve && <ListItemSecondaryAction style={{right: 0, top: "32px"}}>
                    <IconButton 
                      edge="end" aria-label="Confirm" size="small" color="primary"
                      onClick={() => this.decide(candidate, true)}
                    >
                      <ConfirmationNumberOutlinedIcon />
                    </IconButton>
                    <IconButton 
                      edge="end" aria-label="Eject" size="small"
                      onClick={() => this.decide(candidate, false)}
                    >
                      <EjectOutlinedIcon />
                    </IconButton>
                  </ListItemSecondaryAction>}
              </ListItem>
            )
          })}
        </List>}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: state.trips.currentTrip,
  admin: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  goToList: () => dispatch(goToLink(routes.tripsList)),
  decideCandidate: (token, trip, candidate) => dispatch(doDecideCandidate(token, trip, candidate))
})

export default (connect(mapStateToProps, mapDispatchToProps)(ApplicationList));