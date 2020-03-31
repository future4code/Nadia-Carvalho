
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

export const changeTab = (tab) => {
  return {
    type: 'CHANGE_TAB',
    payload: {
      tab
    }
  }
}