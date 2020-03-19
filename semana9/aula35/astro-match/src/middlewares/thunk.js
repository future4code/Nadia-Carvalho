import axios from 'axios'
import {
  setProfileToSwipe
} from '../actions/profiles'

export const getProfileToSwipe = () => async (dispatch) => {
  const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nadia/person')
  dispatch(setProfileToSwipe(response.data.profile))
}