export const setTrips = (trips) => {
  return {
    type: 'SET_TRIPS',
    payload: {
      trips
    }
  }
}
export const saveTripApplication = (application) => {
  return {
    type: 'SAVE_APPLICATION',
    payload: {
      application
    }
  }
}