import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import SaveCardPage from './components/SaveCardPage';
import SingleCardPage from './components/SingleCardPage';
import EditCard from "./components/EditCard";

class App extends Component {
  handleProfile = () => {};

  render() {
    return (
      <div className="App">
        <Route path='/login' component={LoginPage} />
        <Route path='/sign-up' component={SignUpPage} />
        {/* PRIVATE ROUTES */}
        <PrivateRoute exact path='/' component={UserProfile} />
        <PrivateRoute exact path='/user-list' component={UserList} />
        <PrivateRoute exact path='/user-list/:id' component={SingleCardPage} />
        <PrivateRoute exact path='/save/:id' component={SaveCardPage} />

        <PrivateRoute exact path='/edit/:id' component={EditCard} />
        <PrivateRoute exact path='/events/:event' component={UserList} />

      </div>
    );
  }
}

export default App;