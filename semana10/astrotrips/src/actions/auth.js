export const authLogin = (user) => {
  return {
    type: 'AUTH_LOGIN',
    payload: {
      user
    }
  }
}

export const authLogout = () => {
  return {
    type: 'AUTH_LOGOUT',
  }
}

export const showSnackBar = (message, type) => {
  return {
    type: 'SHOW_SNACKBAR',
    payload: {
      message, 
      type
    }
  }
}

export const closeSnackBar = () => {
  return {
    type: 'CLOSE_SNACKBAR'
  }
}