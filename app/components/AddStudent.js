import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import AllStudents from './AllStudents'
import { postStudent, fetchStudents } from '../store'


function AddStudent(props) {
  const campuses = props.campuses
  return (
    <div >
    <AllStudents />
      <h4>Add Wizard</h4>

          <form onSubmit={props.SubmitStudent}>
      <table>
        <thead>
          <th>Name</th>
          <th>Wand</th>
          <th>House</th>
        </thead>
        <tbody>
          <tr>
            <td><input  name="name" /></td>
            <td><input  name="wand" /></td>
            <td>
              <select name="houseSort" className="form-control" >
          {/* fix so that they cant submit this */}
          <option defaultValue>The sorting hat says...</option>
          {campuses.map((campus => {
            return (
              <option key={campus.id} value={campus.id}>{campus.name}</option>
            )
          })
          )}
        </select>
            </td>
            <td>
              <button type="submit" className="btn btn-outline-danger">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
          </form>
    </div>
    // </footer>
  )
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SubmitStudent(event){
      const name = event.target.name.value
      const wand = event.target.wand.value
      const campusId = event.target.houseSort.value
      event.preventDefault();
      dispatch(postStudent({name, wand, campusId}))
      dispatch(fetchStudents());
      ownProps.history.push('/students')
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)

