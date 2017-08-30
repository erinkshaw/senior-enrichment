import axios from 'axios';

//ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'


//ACTION CREATOR
export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function deleteStudent (student) {
  const action = { type: DELETE_STUDENT, student };
  return action;
}

export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
    .then( res => res.data)
    .then(students => {
      const action = getStudents(students)
      dispatch(action)
    })
  }
}

export function postStudent () {

  return function thunk (dispatch) {
    return axios.post('/api/students')
    .then( res => res.data)
    .then(student => {
      const action = getStudent(student)
      dispatch(action)
    })
  }
}

export function removeStudent (studentId) {

  return function thunk (dispatch) {
    return axios.delete(`/api/students/${studentId}`)
    .then( res => res.data)
    .then(student => {
      const action = deleteStudent(student)
      dispatch(action)
    })
  }
}


export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students

    case GET_STUDENT:
      return state.filter(student => student.id !== action.id)

    case DELETE_STUDENT:
      return [...state, action.student]

    default:
      return state
  }
}
