import axios from 'axios'
import {
  setProfileToSwipe,
  setMatches,
} from '../actions/profiles'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nadia/'

export const getProfileToSwipe = () => async (dispatch) => {
  const response = await axios.get(baseUrl + 'person')
  dispatch(setProfileToSwipe(response.data.profile))
}
export const profileChoice = (id, option) => async (dispatch) => {
  const data = {
    "id": id,
    "choice": option
  }
  await axios.post(baseUrl + 'choose-person', data)
  dispatch(setProfileToSwipe(null))
  dispatch(getProfileToSwipe())
}

export const retrievedMatches = () => async(dispatch) => {
  const response = await axios.get(baseUrl + 'matches')
  dispatch(setMatches(response.data.matches))
}