import { routes } from "../containers/Router"

const initialState = {
  currentTab: routes.root,
  snackbar: {
    open: false,
    type: 'info',
    message: ''
  }
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SNACKBAR':
      const { type, message } = action.payload
      return { ...state, snackbar: { open: true, type, message}}
    case 'CLOSE_SNACKBAR':
      return { ...state, snackbar: { open: false, type: 'info', message: ''}}
    case 'CHANGE_TAB': 
      const { tab } = action.payload
      return { ...state, currentTab: tab }
    default:
      return state
  }
}

export default auth