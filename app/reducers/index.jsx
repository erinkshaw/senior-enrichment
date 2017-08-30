import { combineReducers } from 'redux'
// import windowRender from './windowRender'
import campuses from './campuses'
import students from './students'
// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

const rootReducer = combineReducers({
  campuses,
  students
  // newCampusEntry,
  // newStudentEntry,
  // windowRender
})

export default rootReducer

export * from './campuses';
export * from './students';
