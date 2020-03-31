import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline, Container, Grid } from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";
import Header from './header';
import Footer from './footer';
import Snackbar from "./snackbar";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        alignItems="center"
        justify="space-between"
        direction="column"
        style={{minHeight: "100vh"}}
      >
      <Header />
      <Container maxWidth="sm">
        <Snackbar/>
        <Grid
          container
          style={{padding: "20px 5px"}}
          alignItems="center"
          alignContent="center"
          justify="center"
          direction="column"
        >
          <Router history={history} />
        </Grid>
      </Container>
      <Footer />
      </Grid>
    </MuiThemeProvider>
  </Provider>
);

export default App;
