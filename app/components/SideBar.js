import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


//have buttons instead to choose between add student and add campus

function SideBar(props) {
  //change to sidebar if you have time
  // const campuses = props.campuses
  return (
    // <footer>
      <div className="container-fluid school">
        <NavLink to="/AddStudent">
          <button type="button" className="btn btn-outline-secondary btn-lg">Add Wizard</button>
        </NavLink>
        <NavLink to="/AddCampus">
          <button type="button" className="btn btn-outline-info btn-lg">Add House</button>
        </NavLink>
      </div>
    // </footer>
  )
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(SideBar)

