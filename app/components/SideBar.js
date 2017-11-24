import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'



function SideBar() {
  return (
      <div className="container-fluid school buffer">
        <NavLink to="/AddStudent">
          <button type="button" className="btn btn-outline-secondary btn-lg">Add Wizard</button>
        </NavLink>
        <NavLink to="/AddCampus">
          <button type="button" className="btn btn-outline-info btn-lg">Add House</button>
        </NavLink>
      </div>
  )
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(SideBar)

