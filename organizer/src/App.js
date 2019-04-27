import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  handleProfile = () => {};

  render() {
    return (
      <div className="App">
        <h1>Business User Organizer</h1>
        <Route exact path="/UserList" component={UserList} />
        <Route exact path="/UserList/:id" component={UserProfile} />
      </div>
    );
  }
}

export default App;
