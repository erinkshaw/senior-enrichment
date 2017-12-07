import axios from 'axios';

//ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS'
const CREATE_STUDENT = 'CREATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'


//ACTION CREATOR

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function createStudent(student) {
  const action = { type: CREATE_STUDENT, student };
  return action;
}

export function deleteStudent(studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

export function updateStudent(student) {
  const action = { type: UPDATE_STUDENT, student };
  return action;
}

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students))
      })
  }
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => {
        dispatch(createStudent(student))
      })
  }
}

export function putStudent(student) {
  return function thunk(dispatch) {
    return axios.put(`/api/students/${student.id}`, student)
      .then(res => res.data)
      .then(student => {
        dispatch(updateStudent(student))
      })
  }
}


export function removeStudent(studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(() => {
        dispatch(deleteStudent(studentId))
      })
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students

    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId)

    case CREATE_STUDENT:
      return [...state, action.student]

    case UPDATE_STUDENT:
      return [state.filter(student => student.id !== action.id), action.student]

    default:
      return state
  }
}
