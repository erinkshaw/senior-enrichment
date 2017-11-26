import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { postCampus, fetchCampuses } from '../store'

function AddCampus(props) {
  return (
      <div >
        <h3>Add House</h3>
        <div >
        <form className="addschool" onSubmit={props.SubmitCampus}>
        <input
        className="form-control"
        name="campus"
        style={{width: '50%'}}
        />
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
