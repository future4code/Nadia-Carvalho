const authKey = 'futurex-auth-user'
const authStorage = window.localStorage.getItem(authKey)

const initialState = {
  user: authStorage,
  isLogged: Boolean(authStorage) | true,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': 
      const { user } = action.payload
      window.localStorage.setItem(authKey, user)
      return { ...state, user , isLogged: true }
    case 'AUTH_LOGOUT': 
      window.localStorage.removeItem(authKey)
      return { ...state, user: null, isLogged: false }
    default:
      return state
  }
}

export default auth