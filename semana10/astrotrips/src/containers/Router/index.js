import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import TripDetailsPage from "../TripDetailsPage";
import ListTripsPage from "../ListTripsPage";
import ApplicationForm from "../TripDetailsPage/ApplicationForm";




const routes = {
  root: "/"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={"/"} component={HomePage} />
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/trips/create"} component={CreateTripPage} />
        <Route path={"/trips/list"} component={ListTripsPage} />
        <Route path={"/trips/details"} component={TripDetailsPage} />
        <Route path={"/application-form"} component={ApplicationForm} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
