import React from "react";
// import { Route } from "react-router-dom";
//import dummydata from "../dummydata";
// import PrivateRoute from "./components/PrivateRoute";
import "./user.css";

function handleProfile(props, user) {
  props.history.push(`/UserList/${user.id}`);
}
const User = props => {
  console.log(props);

  return (
    // <Link to={`/UserList/${this.props.user.id}`} className="user-card">
    <div onClick={() => handleProfile(props.user)} className="user-card">
      <h2>
        {props.initial} {props.first_name} {props.last_name}
      </h2>
    </div>
  );
};
// function routeToUser(props) {
//   props.history.push(`/UserList/${props.user.id}`);
//   console.log(props);
// }
export default User;
