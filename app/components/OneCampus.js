import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeStudent, removeCampus } from '../store'

function OneCampus(props) {
  const campusId = props.match.params.campusId
  const students = props.students
  const campuses = props.campuses
  const findCampus = campus => +campus.id === +campusId
  const findStudents = students.filter(student => +student.campusId === +campusId);
  const singleCampus = campuses.find(findCampus)
  return (
    <div>
      <h3>Vizards</h3>
      <div className="one-campus">
        <div style={{ marginRight: '100px' }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    className="single-house"
                    src={singleCampus && singleCampus.imgUrl} />
                </td>
                <td>
                  <button type="button" id="deleteCampus" className="close" aria-label="Close" onClick={() => props.deleteCampus(event, singleCampus.id)} >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {findStudents[0] ?
          <div>
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
                  findStudents.map((student) => {
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
          : <div />}
      </div>
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
    deleteStudent(event, id) {
      event.preventDefault();
      dispatch(removeStudent(id))
    },
    deleteCampus(event) {
      const id = ownProps.match.params.campusId
      event.preventDefault();
      dispatch(removeCampus(id))
      ownProps.history.push(`/`)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneCampus)
