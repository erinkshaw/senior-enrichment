import React from 'react';
import { connect } from 'react-redux';

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
          <th></th>
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
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">+</span>
                  </button>
                </td>
                <td>{student.name}</td>
                <td>{student.wand}</td>
                <td><button type="button" className="close" aria-label="Close">
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


export default connect(mapStateToProps)(OneCampus);
