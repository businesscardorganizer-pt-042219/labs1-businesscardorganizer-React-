import React from "react";
import User from "./User";
import data from "../dummydata";
import PropTypes from "prop-types";
import "./user.css";
class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    this.setState({ user: data });
  }
  render() {
    console.log(data);
    return (
      <div className="user-list">
        <h1>{this.state.user.name}</h1>

        <div className="active-user-list">
          {this.state.user.map(user => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
