import React from 'react';
import { routes } from '../Router';
import { connect } from 'react-redux';
import { goToLink } from '../../middlewares/interface';

const tripForm = [
  {
    name: "name",
    label: "Trip title",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{5,}",
    title: "Trip's title, at least 5 letters long."
  },
  {
    name: "planet",
    label: "destination",
    type: "select",
    required: true,
    title: "Please select the destination"
  },
  {
    name: "date",
    label: "Trip's date",
    type: "date",
    required: true,
    title: "Please select a date for the trip",
  },
  {
    name: "tripDescription",
    label: "Trip's description",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{30,}",
    title: "Describe the trip, at least 30 letters long."
  },
  {
    name: "duration",
    label: "Trip's duration",
    type: "number",
    required: true,
    title: "Please inform the trip's duration"
  }
]

class NewTripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  componentWillMount() {
    if (!this.props.isAdmin) {
      this.props.goToHome()
    }
  }

  render() {
    return (
      <div>
        <form>
          {tripForm.map(item => {
            return(
              <input placeholder={item.name}/>
            )
          })}
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  isAdmin: state.auth.isLogged
})

const mapDispatchToPros = (dispatch) => ({
  goToHome: () => dispatch(goToLink(routes.root))
})

export default connect(mapStateToProps, mapDispatchToPros)(NewTripForm)