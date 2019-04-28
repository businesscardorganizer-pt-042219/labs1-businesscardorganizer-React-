
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
>>>>>>> master

class App extends Component {
  handleProfile = () => {};

  render() {
    return (
      <div className="App">
//         <Route exact path="/UserList/:id" component={UserProfile} /> Why are you using this route?
        <Route path='/login' component={LoginPage} />
        <Route path='/sign-up' component={SignUpPage} />
        {/*
        <PrivateRoute exact path='/' component={UserProfile} />
        <PrivateRoute exact path='/user-list' component={UserList} />
        */}
        <Route path='/user-list' component={UserList} />
        <Route exact path='/' component={UserProfile} />
      </div>
    );
  }
}

export default App;