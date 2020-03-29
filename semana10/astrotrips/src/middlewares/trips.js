import axios from 'axios'
import { 
  saveTrip, setTrips, tripDetail, decideCandidate, saveApplication
} from '../actions/trips'
import { goToLink, doShowSnackBar } from './interface'
import { routes } from '../containers/Router'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/nadia'

export const getTrips = () => async (dispatch) => {
  const response = await axios.get(`${baseURL}/trips`)
  dispatch(tripDetail({}))
  dispatch(setTrips(response.data.trips))
}

export const createTrip = (token, trip) => async (dispatch) => {
  const response = await axios.post(`${baseURL}/trips`, trip, { headers: { auth: token } })
  dispatch(saveTrip(response.data.trip))
  dispatch(doShowSnackBar('Trip created', 'success'))
  dispatch(goToLink(routes.tripsList))
}

export const getTripDetail = (token, tripId) => async (dispatch) => {
  const response = await axios.get(`${baseURL}/trip/${tripId}`, { headers: { auth: token } })
  dispatch(tripDetail(response.data.trip))
}

export const doDecideCandidate = (token, tripId, candidate) => async (dispatch) => {
  const url = `${baseURL}/trips/${tripId}/candidates/${candidate.id}/decide`
  const decide = { approve: candidate.approve }
  const response = await axios.put(url, decide, { headers: { auth: token } })
  if (response.data.success) {
    dispatch(decideCandidate(tripId, candidate))
    dispatch(doShowSnackBar('Application decided', 'success'))
    dispatch(goToLink(routes.tripsDetails))
  } else {
    dispatch(doShowSnackBar('Failed to decide', 'error'))
  }
}

export const applyToTrip = (tripId, candidate) => async (dispatch) => {
  const response = await axios.post(`${baseURL}/trips/${tripId}/apply`, candidate)
  if (response.data.success) {
    dispatch(saveApplication(tripId, candidate))
    dispatch(doShowSnackBar(response.data.message, 'success'))
    dispatch(goToLink(routes.tripsDetails))
  } else {
    dispatch(doShowSnackBar('Failed to apply', 'error'))
  }
}

export const goDetailTrip = (token, trip) => async (dispatch) => {
  if (token) {
    await dispatch(getTripDetail(token, trip.id))
  } else {
    dispatch(tripDetail(trip))
  }
  dispatch(goToLink(routes.tripsDetails))
}

export const goApplicationsTrip = (token, trip) => async (dispatch) => {
  await dispatch(getTripDetail(token, trip.id))
  dispatch(goToLink(routes.tripsApplicationList))
}