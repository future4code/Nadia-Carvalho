import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import trips from './trips'
import auth from './auth'
import ui from './interface'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips,
    auth,
    ui
    // Outros reducers aqui
  });
