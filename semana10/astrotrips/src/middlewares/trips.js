import axios from 'axios'
import {setTrips, saveTripApplication} from '../actions/trips'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/nadia'

export const getTrips = () => async (dispatch) => {
  const response = await axios.get(`${baseURL}/trips`)
  dispatch(setTrips(response.data.trips))
}
export const saveApplication = (id, form) => async (dispatch) => {
  const data = {
  }
  await axios.post(`${baseURL}/trips/${id}/apply`, data)
  dispatch(saveTripApplication(null))
}