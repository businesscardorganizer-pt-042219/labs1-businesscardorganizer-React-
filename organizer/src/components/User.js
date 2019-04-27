import React from "react";
// import { Route } from "react-router-dom";
import dummydata from "../dummydata";
import { Link } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import "./user.css";

function User(props) {
  const handleProfile = event => {
    event.preventDefault();
    props.history.push("/UserProfile");
  };

  console.log(props);
  // const id = props.match.params.id;
  // const profile = dummydata.find(user => `${user.id}` === id);
  return (
    <Link to={`/UserList/${props.user.id}`} className="user-card">
      <div className="user-header">
        <h2>
          {props.user.first_name} {props.user.last_name}
        </h2>
      </div>
      <div className="user-img">
        <img src={props.user.Avatar} alt="user-avatar" />
      </div>
    </Link>
  );
}

export default User;
