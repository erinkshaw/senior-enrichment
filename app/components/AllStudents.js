
import React from 'react'
//dont need this yet
// import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function AllStudents(props) {
  const students = props.students
  console.log(students)
  return (
    <div>
      <h3>Wizards</h3>
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
        students.map( (student) => {
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
    students: state.students
  };
};


export default connect(mapStateToProps)(AllStudents);

// <table>
//   <tr>
//     <th>First name</th>
//     <th>Last name</th>
//   </tr>
//   <tr>
//     <td>John</td>
//     <td>Doe</td>
//   </tr>
//   <tr>
//     <td>Jane</td>
//     <td>Doe</td>
//   </tr>
// </table>
