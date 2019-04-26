import React, { Component } from "react";
// import { Route, Link } from 'react-router-dom';
import UserList from "./components/UserList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Business Card Organizer</h1>
        <UserList />
      </div>
    );
  }
}

export default App;
