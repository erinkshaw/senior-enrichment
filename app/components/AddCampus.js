import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import AllCampuses from './AllCampuses'
import { postCampus, fetchCampuses } from '../store'

function AddCampus(props) {
  const campuses = props.campuses
  return (
      <div >
        <AllCampuses />
        <div className="addschool">
        <h4>Add House</h4>
        <form onSubmit={props.SubmitCampus}>
        <input name="campus"  />
        <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
        </div>
      </div>
  )
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SubmitCampus(event){
      const name = event.target.campus.value
      event.preventDefault();
      dispatch(postCampus({name}))
      dispatch(fetchCampuses());
      ownProps.history.push('/campuses')
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddCampus)
