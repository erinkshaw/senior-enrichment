import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import OneCampus from './OneCampus'
import OneStudent from './OneStudent'
import AddStudent from './AddStudent'
import AddCampus from './AddCampus'
import NavBar from './NavBar'
import SideBar from './SideBar'
import store, { fetchCampuses, fetchStudents } from '../store'

export default class Main extends Component {
  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }
  render() {
    return (
      <Router>
        <div id="main" >
            <NavBar />
            <Switch>
              <Route exact path="/students" component={AllStudents} />
              <Route exact path="/" component={AllCampuses} />
              <Route path="/campuses/:campusId" component={OneCampus} />
              <Route exact path="/campuses" component={AllCampuses} />
              <Route path="/students/:studentId" component={OneStudent} />
            </Switch>
            <footer className="sidebar">
              <Switch>
                  <Route exact path="/" component={SideBar} />
                  <Route path="/AddStudent" component={AddStudent} />
                  <Route path="/AddCampus" component={AddCampus} />
                </Switch>
            </footer>
        </div>
      </Router>
    )
  }
}
