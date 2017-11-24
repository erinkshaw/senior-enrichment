import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'



function SideBar() {
  return (
      <div className="main-footer">
        <NavLink to="/AddStudent">
          <button className="btn-outline-secondary btn-lg">Add Wizard</button>
        </NavLink>
        <NavLink to="/AddCampus">
          <button className="btn-outline-info btn-lg">Add House</button>
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

