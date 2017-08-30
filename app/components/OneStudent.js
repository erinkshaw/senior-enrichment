import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeStudent } from '../store'

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
      <h3>Edit Wizard</h3>
            <form>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Wand</th>
            <th>House</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button type="button" className="close" aria-label="Close" onClick={props.deleteStudent}>
                  <span aria-hidden="true">&times;</span>
              </button>
            </td>
            <td>{singleStudent && singleStudent.name}</td>
            <td><input  value={singleStudent && singleStudent.wand}/></td>
            <td>
              <select className="form-control" >
                <option defaultValue>{singleStudent && singleStudent.campus.name}</option>
                {campuses.map( campus => {
                  if (singleStudent && campus.name !== singleStudent.campus.name) {
                    return <option key={campus.id}>{campus.name}</option>
                  }
                  })}
              </select>
            </td>
            <td>
              <button type="button" className="btn btn-outline-danger"> Submit</button>
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
      console.log('DELETED!!!')
      ownProps.history.push('/students')
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(OneStudent);
