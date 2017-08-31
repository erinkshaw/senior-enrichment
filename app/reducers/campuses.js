import axios from 'axios';

//ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'

//ACTION CREATORS
export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

// THUNK CREATORS

export function fetchCampuses () {

    return function thunk (dispatch) {
      return axios.get('/api/campuses')
      .then( res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      })
    }
  }

  export function postCampus (campus) {

      return function thunk (dispatch) {
        return axios.post('/api/campuses', campus)
        .then( res => res.data)
        .then(campus => {
          const action = getCampus(campus)
          dispatch(action)
        })
      }
    }

//REDUCER FUNCTION

export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses

    case GET_CAMPUS:
      return [...state, action.campus]

    default:
      return state
  }
}
