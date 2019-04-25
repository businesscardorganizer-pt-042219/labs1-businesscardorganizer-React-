import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={LoginPage} />
        <Route path='/sign-up' component={SignUpPage} />
      </div>
    );
  }
}

export default App;
