import { createStore, applyMiddleware } from 'redux';

// import rootReducer from './reducers';
//will set up combineReducer later!

import createLogger  from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
// import socket from './socket';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
)

export * from './reducers';




// import axios from 'axios';

// // INITIAL STATE

// const initialState = {
//   students: [],
//   newStudentEntry: '',
//   campuses: [],
//   newCampusEntry: ''
// };

// // ACTION TYPES

// const GET_CAMPUSES = 'GET_CAMPUSES'
// const GET_CAMPUS = 'GET_CAMPUS'
// const MAKE_CAMPUS = 'MAKE_CAMPUS'
// const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
// const DELETE_CAMPUS = 'DELETE_CAMPUS'
// const MAKE_STUDENT = 'MAKE_STUDENT'
// const UPDATE_STUDENT = 'UPDATE_STUDENT'
// const GET_STUDENTS = 'GET_STUDENTS'
// const GET_STUDENT = 'GET_STUDENT'
// const DELETE_STUDENT = 'DELETE_STUDENT'


// // ACTION CREATORS


// export function getCampuses (campuses) {
//   const action = { type: GET_CAMPUSES, campuses };
//   return action;
// }

// export function getCampus (campus) {
//   const action = { type: GET_CAMPUS, campus };
//   return action;
// }

// export function makeCampus (campus) {
//   const action = { type: MAKE_CAMPUS, campus };
//   return action;
// }


// export function updateCampus (campus) {
//   const action = { type: UPDATE_CAMPUS, campus };
//   return action;
// }

// export function deleteCampus (campus) {
//   const action = { type: DELETE_CAMPUS, campus };
//   return action;
// }

// export function getStudents (students) {
//   const action = { type: GET_STUDENTS, students };
//   return action;
// }

// export function getStudent (student) {
//   const action = { type: GET_STUDENT, student };
//   return action;
// }

// export function makeStudent (student) {
//   const action = { type: MAKE_STUDENT, student };
//   return action;
// }

// export function updateStudent(student) {
//   const action = { type: UPDATE_STUDENT, student };
//   return action;
// }

// export function deleteStudent (student) {
//   const action = { type: DELETE_STUDENT, student };
//   return action;
// }

// // THUNK CREATORS

// export function fetchCampuses () {

//   return function thunk (dispatch) {
//     return axios.get('/api/campuses')
//     .then( res => res.data)
//     .then(campuses => {
//       const action = getCampuses(campuses)
//       dispatch(action)
//     })
//   }
// }

// export function postCampus () {

//   return function thunk (dispatch) {
//     return axios.post('/api/campuses')
//     .then( res => res.data)
//     .then(campus => {
//       const action = getCampus(campus)
//       dispatch(action)
//     })
//   }
// }

// //need to figure out how to grab campus id -- probably from history object?
// export function removeCampus () {

//   return function thunk (dispatch) {
//     return axios.delete('/api/campuses/:campusId')
//     .then( res => res.data)
//     .then(campus => {
//       const action = deleteCampus(campus)
//       dispatch(action)
//     })
//   }
// }
// export function fetchStudents () {

//   return function thunk (dispatch) {
//     return axios.get('/api/students')
//     .then( res => res.data)
//     .then(students => {
//       const action = getStudents(students)
//       dispatch(action)
//     })
//   }
// }

// export function postStudent () {

//   return function thunk (dispatch) {
//     return axios.post('/api/students')
//     .then( res => res.data)
//     .then(student => {
//       const action = getStudent(student)
//       dispatch(action)
//     })
//   }
// }

// export function removeStudent () {

//   return function thunk (dispatch) {
//     return axios.delete('/api/students/:studentId')
//     .then( res => res.data)
//     .then(student => {
//       const action = deleteStudent(student)
//       dispatch(action)
//     })
//   }
// }

// // REDUCER

// function reducer (state = initialState, action) {
//   switch (action.type) {
//     case GET_CAMPUSES:
//       return {
//         ...state,
//         campuses: action.campuses
//       }

//     case GET_CAMPUS:

//     break;
//     case MAKE_CAMPUS:

//     break;
//     case UPDATE_CAMPUS:

//     break;
//     case DELETE_CAMPUS:

//     break;
//     case MAKE_STUDENT:

//     break;
//     case UPDATE_STUDENT:

//     break;
//     case GET_STUDENT:

//     break;
//     case GET_STUDENTS:

//     break;
//     case DELETE_STUDENT:

//     break;

//     default:
//       return state
//   }
// }

//  const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

//  export default store
