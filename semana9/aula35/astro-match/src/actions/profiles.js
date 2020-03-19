import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nadia/clear')
}

export const setProfileToSwipe = (profile) => {
  return {
    type: 'SET_PROFILE_TO_SWIPE',
    payload: {
      profile
    }
  }
}