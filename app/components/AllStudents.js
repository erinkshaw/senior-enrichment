
import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeStudent } from '../store'

function AllStudents(props) {
  const students = props.students
  return (
    <div style={{marginTop: '50px'}}>
      <h3>Vizards</h3>
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
      {
        students.map( (student) => {
          if (!student.campus.name) console.log(student.name)
          return (
            <tr key={student.id}>
              <td>
                <NavLink to={`students/${student.id}`}>
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">+</span>
                </button>
                </NavLink>
              </td>
              <td>{student.name}</td>
              <td>{student.wand}</td>
              <td>{student.campus.name}</td>
              <td>
                <button type="button" className="close" aria-label="Close" onClick={ () => {props.deleteStudent(event, student.id)}} >
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
    students: state.students
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent(event, id){
      event.preventDefault();
      dispatch(removeStudent(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);

