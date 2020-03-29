import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Planets from '../../images/planets.png'

import { connect } from 'react-redux';
import { goToLink } from '../../middlewares/interface';
import { routes } from '../Router';

const useStyles = (theme) => ({
  root: {
    maxWidth: 345,
  },
  desc: {
    width: '100%',
    maxWidth: '36ch',
  },
});

class TripDetailsPage extends React.Component {

  componentWillMount() {
    const { trip, goToList } = this.props
    if (!trip || !trip.id) {
      goToList()
    }
  }

  render() {
    const { trip, isAdmin, goToApplication, classes } = this.props
    let tripImage = Planets
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={trip.planet}
            height="140"
            image={tripImage}
            title={`${trip.name} - ${trip.planet} (${trip.date})`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {trip.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {trip.description}
            </Typography>
            <List className={classes.desc}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Planet"
                  secondary={trip.planet}
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Date"
                  secondary={trip.date}
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Duration"
                  secondary={`${trip.durationInDays} days`}
                />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button 
            size="small" variant="contained" color="primary" 
            onClick={() => goToApplication(isAdmin)}
            disabled={!isAdmin && trip.alreadyApplied}
          >
            {isAdmin ? "Manage applications" : "Apply to this trip!"}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  trip: state.trips.currentTrip,
  isAdmin: state.auth.isLogged
})

const mapDispatchToProps = (dispatch) => ({
  goToApplication: (isAdmin) => dispatch(goToLink(isAdmin ? routes.tripsApplicationList : routes.tripsApplicationForm)),
  goToList: () => dispatch(goToLink(routes.tripsList))
})

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage));