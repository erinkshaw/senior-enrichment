import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

function SideBar() {
  return (
      <div className="main-footer">
        <NavLink to="/AddStudent">
          <button className="btn-outline-secondary btn-lg btn-footer">Add Vizard</button>
        </NavLink>
        <NavLink to="/AddCampus">
          <button className="btn-outline-info btn-lg btn-footer">Add House</button>
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

