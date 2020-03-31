import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import TripDetailsPage from "../TripDetailsPage";
import ListTripsPage from "../ListTripsPage";
import ApplicationForm from "../TripDetailsPage/ApplicationForm";
import ApplicationList from "../TripDetailsPage/ApplicationList";

export const routes = {
  root: "/",
  login: "/login",
  tripsCreate: "/trips/create",
  tripsList: "/trips/list",
  tripsDetails: "/trips/details",
  tripsApplicationForm: "/trips/application-form",
  tripsApplicationList: "/trips/application-list",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} exact component={HomePage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.tripsCreate} component={CreateTripPage} />
        <Route path={routes.tripsList} component={ListTripsPage} />
        <Route path={routes.tripsDetails} component={TripDetailsPage} />
        <Route path={routes.tripsApplicationForm} component={ApplicationForm} />
        <Route path={routes.tripsApplicationList} component={ApplicationList} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
