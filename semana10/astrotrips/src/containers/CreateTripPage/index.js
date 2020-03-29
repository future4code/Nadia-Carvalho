import React from 'react';
import {
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Grid
} from '@material-ui/core';

import { connect } from 'react-redux';
import { goToLink } from '../../middlewares/interface';
import { routes } from '../Router';
import { createTrip } from '../../middlewares/trips';

const planetList = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

const tripForm = [
  {
    name: "name",
    label: "Trip title",
    type: "text",
    required: true,
    pattern: ".{5,}",
    title: "Trip's title, at least 5 letters long."
  },
  {
    name: "planet",
    label: "Destination",
    type: "select",
    required: true,
    title: "Please select the destination",
    materialProps: {
      select: true,
      InputLabelProps: { shrink: true }
    },
    children: planetList.map(option => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))
  },
  {
    name: "durationInDays",
    label: "Trip's duration",
    type: "number",
    required: true,
    min: 50,
    title: "Please inform the trip's duration"
  },
  {
    name: "date",
    label: "Trip's date",
    type: "date",
    required: true,
    min: Date.now(),
    title: "Please select a date for the trip",
    materialProps: {
      InputLabelProps: { shrink: true }
    },
  },
  {
    name: "description",
    label: "Trip's description",
    type: "text",
    required: true,
    pattern: ".{30,}",
    title: "Describe the trip, at least 30 letters long.",
    materialProps: {
      multiline: true,
      rowsMax: "8"
    }
  },
]

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
      }
    };
  }

  componentWillMount() {
    if (!this.props.admin) {
      this.props.goToHome()
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  submit = (e) => {
    e.preventDefault()
    const { admin, createTrip } = this.props
    createTrip(admin, this.state.form)
  }
  
  render() {
    return (
      <Paper style={{ padding: "16px" }}>
        <Typography
          style={{ marginBottom: "15px" }}
          variant="h5"
        >
          Create a new trip
        </Typography>
        <form onSubmit={this.submit}>
          <Grid
            container
            alignItems="flex-start"
            direction="column"
            justify="center"
            spacing={3}>
            {tripForm.map((item, index) => {
              return (
                <Grid item key={index}>
                  <TextField
                    style={{ width: "350px", maxWidth: "70vw" }}
                    id={item.name}
                    name={item.name}
                    label={item.label}
                    type={item.type}
                    fullWidth
                    helperText={item.title}
                    variant="outlined"
                    value={this.state.form[item.name]}
                    onChange={this.handleChange}
                    inputProps={{
                      required: item.required,
                      pattern: item.pattern,
                      title: item.title,
                      min: item.min
                    }}
                    {...item.materialProps}
                  >
                    {item.children}
                  </TextField>
                </Grid>
              )
            })}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{margin: "10px"}}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    )
  }

}

const mapStateToProps = (state) => ({
  admin: state.auth.user
})

const mapDispatchToPros = (dispatch) => ({
  goToHome: () => dispatch(goToLink(routes.root)),
  createTrip: (token, form) => dispatch(createTrip(token, form))
})

export default connect(mapStateToProps, mapDispatchToPros)(NewTripForm)