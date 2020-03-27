import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const LoginWrapper = styled.form`
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

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  };

  render() {
    const { email, password } = this.state;

    return (
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
          style={{margin: "15px"}}
          type="submit"
        >
          Login
        </Button>
      </LoginWrapper>
    );
  }
}

export default LoginPage;