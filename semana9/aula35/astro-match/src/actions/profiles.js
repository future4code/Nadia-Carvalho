import axios from 'axios'


export const setProfileToSwipe = (profile) => {
  return {
    type: 'SET_PROFILE_TO_SWIPE',
    payload: {
      profile
    }
  }
}

export const setMatches = (matches) => {
  return {
    type: 'SET_MATCHES',
    payload: {
      matches
    }
  }
}