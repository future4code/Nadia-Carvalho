import { showSnackBar, closeSnackBar, changeTab } from '../actions/interface'
import { push } from 'connected-react-router'

export const doShowSnackBar = (message, type = 'info') => (dispatch) => {
  dispatch(showSnackBar(message, type))
}

export const doCloseSnackBar = () => dispatch => {
  dispatch(closeSnackBar())
}

export const goToLink = (url) => (dispatch) => {
  dispatch(changeTab(url))
  dispatch(push(url))
}