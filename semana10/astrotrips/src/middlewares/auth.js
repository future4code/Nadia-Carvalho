import axios from 'axios'
import { authLogin, authLogout } from '../actions/auth'
import { doShowSnackBar, goToLink } from './interface'
import { routes } from '../containers/Router'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/nadia'

export const doLogin = (form) => async (dispatch) => {
  console.log(form)
  try {
    const response = await axios.post(`${baseURL}/login`, form)
    dispatch(authLogin(response.data.token))  
    dispatch(goToLink(routes.root))
  } catch(e) {
    console.log(e)
    dispatch(doShowSnackBar('Invalid credentials!', 'error'))
  }
}

export const doLogout = () => (dispatch) => {
  dispatch(authLogout())
  dispatch(goToLink(routes.root))
}