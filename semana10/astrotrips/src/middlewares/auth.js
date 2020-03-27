import axios from 'axios'
import {authLogin, authLogout, showSnackBar, closeSnackBar} from '../actions/auth'
import { push } from 'connected-react-router'
import { routes } from '../containers/Router'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/nadia'

export const doLogin = (form) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/login`, form)
    dispatch(authLogin(response.data.token))  
  } catch(e) {
    console.log(e)
    dispatch(doShowSnackBar('Invalid credentials!', 'error'))
  }
}

export const doLogout = () => (dispatch) => {
  dispatch(authLogout())
  dispatch(push(routes.root))
}

export const doShowSnackBar = (message, type = 'info') => (dispatch) => {
  dispatch(showSnackBar(message, type))
}

export const doCloseSnackBar = () => dispatch => {
  dispatch(closeSnackBar())
}