import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { doLogin } from "../../middlewares/auth";
import { Typography, Paper } from "@material-ui/core";
import { routes } from "../Router";
import { goToLink } from "../../middlewares/interface";

const LoginWrapper = styled.form`
  margin-top: 12px;
  width: 100%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  componentWillMount(){
    if(this.props.auth){
      this.props.goTo(routes.root)
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault()
    this.props.doLogin(this.state)
  };

  render() {
    const { email, password } = this.state;

    return (
      <Paper style={{ padding: "20px" }}>
        <Typography variant="h5">FutureX Staff?</Typography>
        <Typography variant="caption"> Enter into the future</Typography>
        <LoginWrapper onSubmit={this.formSubmit}>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            required
            inputProps={{
              title: "Provide a valid email"
            }}
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            required
            inputProps={{
              pattern: ".{6,}",
              title: "At least 6 digits passwords"
            }}
            value={password}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "15px" }}
            type="submit"
          >
            Login
          </Button>
        </LoginWrapper>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  doLogin: (form) => dispatch(doLogin(form)),
  goTo: (url) => dispatch(goToLink(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)