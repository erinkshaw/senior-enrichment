import React from 'react'
import { connect } from 'react-redux'
import { postStudent } from '../store'


function AddStudent(props) {
  const campuses = props.campuses
  return (
    <div >
      <h3>Add Vizard</h3>
      <div id="addwizard">
        <form onSubmit={props.SubmitStudent}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Wand</th>
                <th>House</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input className="form-control" name="name" /></td>
                <td><input className="form-control" name="wand" /></td>
                <td>
                  <select name="houseSort" className="form-control" >
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
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SubmitStudent(event) {
      const name = event.target.name.value
      const wand = event.target.wand.value
      const campusId = event.target.houseSort.value
      event.preventDefault();
      if (!name || !wand || !campusId) alert('Invalid Entry!')
      else {
        dispatch(postStudent({ name, wand, campusId }))
        ownProps.history.push('/students')
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)

