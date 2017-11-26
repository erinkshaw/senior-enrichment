import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { removeStudent, putStudent, fetchStudents } from '../store'


function OneStudent(props) {
  const studentId = props.match.params.studentId
  const students = props.students
  const campuses = props.campuses
  const findStudent = (student) => student.id == +studentId
  const singleStudent = students.find(findStudent)
  return (
    <div>
        <h3>Edit Vizard</h3>
    <div className="one-student">
      <NavLink to={`/campuses/${singleStudent.campus.id}`}>
        <img src={singleStudent && singleStudent.campus.imgUrl} />
      </NavLink>
      <div id="edit-student">
        <form onSubmit={props.updateStudent}>
          <table>
            <thead>
              <th />
              <th>Name</th>
              <th>Wand</th>
              <th>House</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="button" className="close" aria-label="Close" onClick={props.deleteStudent}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </td>
                <td>
                  <input className="form-control" defaultValue={singleStudent && singleStudent.name} name="name" />
                </td>
                <td style={{ width: '250px' }}>
                  <input
                    className="form-control"
                    defaultValue={singleStudent && singleStudent.wand} name="wand" />
                </td>
                <td>
                  <select className="form-control houseSelect" name="houseSort" >
                    <option defaultValue value={singleStudent.campus.id}>{singleStudent && singleStudent.campus.name}</option>
                    {campuses.map(campus => {
                      if (singleStudent && campus.name !== singleStudent.campus.name) {
                        return <option key={campus.id} value={campus.id}>{campus.name}</option>
                      }
                    })}
                  </select>
                </td>
                <td>
                  <button type="submit" className="btn btn-outline-danger"> Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    </div>
  )
}
const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudent(event) {
      const studentId = ownProps.match.params.studentId
      event.preventDefault()
      dispatch(removeStudent(studentId))
      dispatch(fetchStudents())
      ownProps.history.push('/students')
    },
    updateStudent(event) {
      const id = ownProps.match.params.studentId
      const name = event.target.name.value
      const wand = event.target.wand.value
      const campusId = event.target.houseSort.value
      event.preventDefault()
      dispatch(putStudent({ id, name, wand, campusId }))
      dispatch(fetchStudents())
      ownProps.history.push('/students')
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OneStudent))
