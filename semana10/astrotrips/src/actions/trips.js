export const tripDetail = (trip) => {
  return {
    type : 'TRIP_DETAIL',
    payload: {
      trip
    }
  }
}

export const setTrips = (trips) => {
  return {
    type: 'SET_TRIPS',
    payload: {
      trips
    }
  }
}

export const saveTrip = (trip) => {
  return {
    type: 'SAVE_TRIP',
    payload: {
      trip
    }
  }
}

export const saveApplication = (tripId, candidate) => {
  return {
    type: 'SAVE_APPLICATION',
    payload: {
      tripId,
      candidate
    }
  }
}

export const decideCandidate = (tripId, candidate) => {
  return {
    type: 'DECIDE_CANDIDATE',
    payload: {
      tripId,
      candidate
    }
  }
}