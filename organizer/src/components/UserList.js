import React from "react";
import User from "./User";
import data from "../dummydata";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
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
    return (
      <Link to={`/UserList/${UserProfile}`} className="user-list">
        <h1>
          {this.state.user.first_name} {this.state.user.last_name}
        </h1>

        <div className="active-user-list">
          {this.state.user.map(user => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </Link>
    );
  }
}

export default UserList;
