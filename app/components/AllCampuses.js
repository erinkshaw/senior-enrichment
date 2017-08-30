
import React from 'react'
//dont need this yet
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function AllCampuses(props) {
  const campuses = props.campuses
  return (
    <div>
    {
      campuses.map( (campus) => {
        return (
          <NavLink key={campus.id} to={`/campuses/${campus.id}`}>
            <img src ={campus.imgUrl} />
          </NavLink>
        )
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
