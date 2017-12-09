import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { postStudent, fetchStudents } from '../store'


function AddStudent(props) {
  const campuses = props.campuses
  return (
    <div >
      <h3>Add Vizard</h3>
      <div id="addwizard">
          <form onSubmit={props.SubmitStudent}>
      <table>
          <th>Name</th>
          <th>Wand</th>
          <th>House</th>
        <tbody>
          <tr>
            <td><input className="form-control" name="name" /></td>
            <td><input className="form-control" name="wand" /></td>
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

