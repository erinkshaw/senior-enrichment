import axios from 'axios';

//ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'


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

export function updateStudent(student) {
  const action = { type: UPDATE_STUDENT, student };
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

export function postStudent (student) {

  return function thunk (dispatch) {
    return axios.post('/api/students', student)
    .then( res => res.data)
    .then(student => {
      const action = getStudent(student)
      dispatch(action)
    })
  }
}

export function putStudent (student) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${student.id}`, student)
    .then( res => {
      const action = updateStudent(res.data)
      dispatch(action)
    })
    .catch(console.error)
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

      case DELETE_STUDENT:
      return state.filter(student => student.id !== action.id)

      case GET_STUDENT:
      return [...state, action.student]

    //not sure this gonna work -- grimace face
    case UPDATE_STUDENT:
      return [state.filter(student => student.id !== action.id), action.student]

    default:
      return state
  }
}
