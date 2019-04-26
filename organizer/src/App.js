import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import UserList from "./components/UserList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={LoginPage} />
        <Route path='/sign-up' component={SignUpPage} />
        <PrivateRoute exact path='/' component={HomePage} />
        <PrivateRoute exact path='/user-list' component={UserList} />
      </div>
    );
  }
}

export default App;
