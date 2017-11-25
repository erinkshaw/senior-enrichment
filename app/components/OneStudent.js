import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { removeStudent, putStudent, fetchStudents } from '../store'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class OneStudent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newHouse: 0
    }
  }
  render() {
    const studentId = this.props.match.params.studentId
    const students = this.props.students
    const campuses = this.props.campuses
    const findStudent = (student) => student.id == +studentId
    const singleStudent = students.find(findStudent)
    return (
      <div className="one-student">
        <NavLink to={`/campuses/${singleStudent.campus.id}`}>
          <img src={singleStudent && singleStudent.campus.imgUrl} />
        </NavLink>
        <div id="edit-student">
          <h3 style={{ fontFamily: 'LUMOS', textAlign: 'center' }}>Edit Vizard</h3>
          <form onSubmit={this.props.updateStudent}>
            <table>
              <thead>
                <th />
                <th>Name</th>
                <th>Wand</th>
                <th>House           </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.deleteStudent}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </td>
                  <td>
                    <input className="form-control" defaultValue={singleStudent && singleStudent.name} name="name" />
                  </td>
                  <td>
                    <input className="form-control" style={{ width: '200px' }} defaultValue={singleStudent && singleStudent.wand} name="wand" />
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
                    {/* <div className="dropdown" >
                      <button
                        onClick={() => {
                          this.setState({ newHouse: +singleStudent.campus.id })
                        }}
                        className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {singleStudent && singleStudent.campus.name}
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        {campuses.map(campus => {
                          if (singleStudent && campus.name !== singleStudent.campus.name) {
                            return (
                              <button
                                className="dropdown-item"
                                onClick={() => {
                                  console.log(this.state)
                                  this.setState({ newHouse: +campus.id })
                                }}
                                type="button" key={campus.id} value={campus.id}>{campus.name}</button>
                            )
                          }
                        })}
                      </div>
                    </div>*/}
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
    )
  }
}
const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudent(event) {
      const studentId = ownProps.match.params.studentId
      event.preventDefault();
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
