import axios from 'axios';

//ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'

//ACTION CREATORS

export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action
}

export function deleteCampus(campusId) {
  const action = { type: DELETE_CAMPUS, campusId }
  return action
}

export function createCampus(campus) {
  const action = { type: CREATE_CAMPUS, campus };
  return action
}

// THUNK CREATORS

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses))
      })
  }
}

export function postCampus(campus) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(campus => {
        dispatch(createCampus(campus))
      })
  }
}

export function removeCampus(campusId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
      .then( () => {
        dispatch(deleteCampus(campusId))
      })
  }
}

//REDUCER FUNCTION

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses

    case CREATE_CAMPUS:
      return [...state, action.campus]

    case DELETE_CAMPUS:
      return state.filter(campus => +campus.id !== +action.campusId)

    default:
      return state
  }
}
