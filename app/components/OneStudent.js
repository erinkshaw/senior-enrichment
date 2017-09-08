import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeStudent, putStudent, fetchStudents, getStudent } from '../store'

function OneStudent(props) {
  const studentId = props.match.params.studentId
  const students = props.students
  const campuses = props.campuses
  const findStudent = (student) =>  student.id == +studentId
  const singleStudent = students.find(findStudent)


    return (
    <div>
      <NavLink to={`/campuses/${singleStudent.campus.id}`}>
      <img src={singleStudent && singleStudent.campus.imgUrl} />
      </NavLink>
      {/* <h3>Edit Wizard</h3> */}
            <form onSubmit={ () =>  props.updateStudent}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Wand</th>
            <th>House           </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button type="button" className="close" aria-label="Close" onClick={props.deleteStudent}>
                  <span aria-hidden="true">&times;</span>
              </button>
            </td>
            <td>
              <input  defaultValue={singleStudent && singleStudent.name} name="name" />
            </td>
            <td>
              <input  defaultValue={singleStudent && singleStudent.wand} name="wand" />
            </td>
            <td>
              <select className="form-control houseSelect" name="houseSort" >
                <option defaultValue value={singleStudent.campus.id}>{singleStudent && singleStudent.campus.name}</option>
                {campuses.map( campus => {
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
    deleteStudent(event){
      const studentId = ownProps.match.params.studentId
      event.preventDefault();
      dispatch(removeStudent(studentId))
      ownProps.history.push('/students')
    },
    updateStudent(event, campus){
      const id = ownProps.match.params.studentId
      const name = event.target.name.value
      const wand = event.target.wand.value
      const campusId = event.target.houseSort.value
      event.preventDefault()
      dispatch(putStudent({id, name, wand, campusId, campus}))
      // dispatch(fetchStudents())
      ownProps.history.push('/students')}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(OneStudent);
