import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Planets from '../../images/planets.png'
import PropTypes from 'prop-types'

import { goDetailTrip, goApplicationsTrip } from '../../middlewares/trips';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  desc: {
    width: '100%',
  },
});

CardTrip.propTypes = {
  trip: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

function CardTrip(props) {

  const classes = useStyles();

  const { trip, admin } = props
  let tripImage = Planets

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={trip.planet}
          height="50"
          image={tripImage}
          title={`${trip.name} - ${trip.planet} (${trip.date})`}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            {trip.name}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {String(trip.description).substring(0, 70)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" variant="contained" color="primary" 
          onClick={() => props.goToDetails(admin, trip)}
        >
          Details
        </Button>
        {admin && 
        <Button 
          size="small" variant="contained" color="secondary" 
          onClick={() => props.goToApplications(admin, trip)}
        >
          Candidates
        </Button>}
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  admin: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  goToDetails: (token, trip) => dispatch(goDetailTrip(token, trip)),
  goToApplications: (token, trip) => dispatch(goApplicationsTrip(token, trip))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTrip);