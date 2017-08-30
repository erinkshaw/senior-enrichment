import React from 'react';
import { connect } from 'react-redux';

function OneStudent(props) {

    const studentId = props.match.params.studentId
    const students = props.students
    const campuses = props.campuses
    const findStudent = (student) =>  student.id == +studentId
    const singleStudent = students.find(findStudent)

console.log(singleStudent)
    return (
    <div>
      <img src={'/'} />
      <h3>Edit Wizard</h3>
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
            <td></td>
            <td>{singleStudent && singleStudent.name}</td>
            <td>{singleStudent && singleStudent.wand}</td>
            <td>
              <select className="form-control" >
                {campuses.map( campus => {
                  {/* if (campus.id === singleStudent.campusId) {
                    return <option defaultValue>{campus.name}</option>
                  }
                  else { */}
                    return <option>{campus.name}</option>
                  {/* } */}
                })}
              </select>
            </td>
            <td><button type="button" className="btn btn-outline-danger">Submit</button></td>
          </tr>
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


export default connect(mapStateToProps)(OneStudent);
