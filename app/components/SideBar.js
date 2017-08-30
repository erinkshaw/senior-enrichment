import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


//have buttons instead to choose between add student and add campus

function SideBar(props) {
  //change to sidebar if you have time
  const campuses = props.campuses
  return (
    <footer>
      <div >
        <h4>Add Wizard</h4>
        <input   />
        <input  />
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
          <button type="button" className="btn btn-outline-danger">Submit</button>
      </div>
      <div >
        <h4>Add House</h4>
        <input />
        <button type="button" className="btn btn-outline-primary">Submit</button>
      </div>
    </footer>
  )
}

const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(SideBar)
