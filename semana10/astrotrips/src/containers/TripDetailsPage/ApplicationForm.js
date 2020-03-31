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
import { applyToTrip } from '../../middlewares/trips';

const countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

const appForm = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    pattern: ".{5,}",
    title: "At least 5 letters long."
  },
  {
    name: "age",
    label: "User's age",
    type: "number",
    required: true,
    min: 18,
    title: "Age (in years).",
  },
  {
    name: "applicationText",
    label: "Application Text",
    type: "text",
    required: true,
    pattern: ".{30,}",
    title: "Why would you be a good candidate for this trip?",
    materialProps: {
      multiline: true,
      rowsMax: "8"
    }
  },
  {
    name: "profession",
    label: "User's profession",
    type: "text",
    required: true,
    pattern: ".{10,}",
    title: "At least 10 letters long."
  },
  {
    name: "country",
    label: "User's country",
    type: "select",
    required: true,
    title: "Select your country.",
    materialProps: {
      select: true,
      InputLabelProps: { shrink: true }
    },
    children: countryList.map(option => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))
  },
]

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "Brazil"
      }
    };
  }

  componentWillMount() {
    const { trip, goToList } = this.props
    if (!trip || !trip.id || (trip && trip.alreadyApplied)) {
      goToList()
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
    const { applyToTrip, trip } = this.props
    applyToTrip(trip.id, this.state.form)
  }
  
  render() {
    const { trip } = this.props
    return (
      <Paper style={{ padding: "16px" }}>
        <Typography
          style={{ marginBottom: "15px" }}
          variant="h5"
        >
          Apply to {trip.name}
        </Typography>
        <form onSubmit={this.submit}>
          <Grid
            container
            alignItems="flex-start"
            direction="column"
            justify="center"
            spacing={3}>
            {appForm.map((item, index) => {
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
  trip: state.trips.currentTrip
})

const mapDispatchToProps = (dispatch) => ({
  goToList: () => dispatch(goToLink(routes.tripsList)),
  applyToTrip: (tripId, form) => dispatch(applyToTrip(tripId, form))
})

export default (connect(mapStateToProps, mapDispatchToProps)(ApplicationForm));