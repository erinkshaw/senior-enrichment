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
    const be = this.state
    store.dispatch(fetchCampuses())
    store.dispatch(fetchStudents())
  }

  render() {
    const be = this.state
    return (
      <Router>
        <div>
            <NavBar />
              <Switch>
                <Route exact path="/students" component={AllStudents} />
                <Route path="/campuses/:campusId" component={OneCampus} />
                <Route path="/students/:studentId" component={OneStudent} />
                <Route path="/AddStudent" component={AddStudent} />
                <Route path="/AddCampus" component={AddCampus} />
                <Route path="/" component={AllCampuses} />
              </Switch>
            <SideBar />
        </div>
      </Router>
    )
  }
}
