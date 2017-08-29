
import React from 'react'
//dont need this yet
// import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function AllCampuses(props) {
  const campuses = props.campuses
  console.log(props)
  return (
    <div>
    {
      campuses.map( (campus) => {
        console.log(campus.name, 'campus name')
        return <p key={campus.id}>{campus.name}</p>
      })
    }
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};


export default connect(mapStateToProps)(AllCampuses);
