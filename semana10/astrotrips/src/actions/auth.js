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