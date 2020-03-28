 
const initialState = {
  trips: [],
  currentTrip: {},
  applications: []
}

const trips = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRIPS':
      return { ...state, trips: action.payload.trips }
    case 'SAVE_TRIP':
      return { ...state, trips: [ ...state.trips, action.payload.trip ] }
    case 'TRIP_DETAIL':
      const { trip } = action.payload
      if (!trip.candidates) {
        trip.candidates = []
      }
      trip.alreadyApplied = state.applications.some(a => a === trip.id)
      return { ...state, currentTrip: trip }
    case 'DECIDE_CANDIDATE': {
      const { candidate, tripId } = action.payload
      const currentTrip = { ...state.currentTrip }
      if (tripId === currentTrip.id) {
        currentTrip.candidates = currentTrip.candidates.map(c => {
          if (c.id === candidate.id ) {
            c.approve = candidate.approve
          }
          return c
        })
        return { ...state, currentTrip }
      } else {
        return state
      }
    }
    case 'SAVE_APPLICATION': {
      const { candidate, tripId } = action.payload
      const currentTrip = { ...state.currentTrip }
      if (tripId === currentTrip.id) {
        if (!currentTrip.candidates) {
          currentTrip.candidates = []
        }
        currentTrip.candidates = [ ...currentTrip.candidates , candidate ]
        const applications = [...state.applications, tripId ]
        return { ...state, currentTrip, applications }
      } else {
        return state
      }
    }
    default:
      return state
  }
}

export default trips