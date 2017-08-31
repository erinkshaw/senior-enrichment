import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeStudent, fetchStudents } from '../store'

function OneCampus(props) {
  const campusId = props.match.params.campusId
  const students = props.students
  const campuses = props.campuses
  const findCampus = (campus) =>  campus.id == +campusId
  const findStudents = students.filter((student) => student.campusId == +campusId);
  const singleCampus = campuses.find(findCampus)
  return (
  <div>
    <img src={singleCampus && singleCampus.imgUrl} />
    <table>
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Wand</th>
        </tr>
      </thead>
        <tbody>
        {
          findStudents.map( (student) => {
            return (
              <tr key={student.id}>
                <td>
                  <NavLink to={`/students/${student.id}`}>
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">+</span>
                  </button>
                  </NavLink>
                </td>
                <td>{student.name}</td>
                <td>{student.wand}</td>
                <td>
                  <button type="button" className="close" aria-label="Close" onClick={() => props.deleteStudent(event, student.id)} >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </td>
              </tr>
              )
          })
        }
      </tbody>
    </table>
  </div>
  )

}
const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudent(event, id){
      event.preventDefault();
      dispatch(removeStudent(id))
      console.log(id)
      dispatch(fetchStudents());
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(OneCampus);
