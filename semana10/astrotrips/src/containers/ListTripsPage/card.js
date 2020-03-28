import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Planets from '../../images/planets.png'
import PropTypes from 'prop-types'

import { goDetailTrip } from '../../middlewares/trips';
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
  trip: PropTypes.object.isRequired
};

function CardTrip(props) {

  const classes = useStyles();

  const { trip } = props
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
            {String(trip.description).substring(0, 50)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.goToDetails(trip)}>
          See more
        </Button>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => ({
  goToDetails: (trip) => dispatch(goDetailTrip(trip))
})
export default connect(null, mapDispatchToProps)(CardTrip);