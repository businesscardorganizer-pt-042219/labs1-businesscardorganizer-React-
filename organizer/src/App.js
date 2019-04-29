import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  handleProfile = () => {};

  render() {
    // const { user } = this.state;
    return (
      <div className="App">
        <Route
          exact
          path="/UserList"
          // render={props => <UserList {...props} user={user} />}
          component={UserList}
        />
        <Route
          exact
          path="/UserList/:id"
          // render={props => <UserProfile {...props} user={user} />}
          component={UserProfile}
        />
      </div>
    );
  }
}

export default App;
